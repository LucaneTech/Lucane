/**
 * Scène 3D du hero (plan, tâche 3.0) : un nuage de particules irisées qui se rassemble
 * en forme du logo Lucane (le lucane, scarabée), ondule, se creuse autour du curseur,
 * et se disperse quand on fait défiler la page.
 *
 * Tout le mouvement est calculé dans le shader (GPU) : aucune boucle JavaScript par particule.
 * Pause automatique hors écran ; désactivée en mouvement réduit (le parent affiche alors un repli).
 */
import { useEffect, useRef } from "react";
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Clock,
  Color,
  MathUtils,
  NormalBlending,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  Vector3,
  WebGLRenderer,
} from "three";

const LOGO_SRC = "/favicon.png";
const SAMPLE = 180; // résolution d'échantillonnage du logo
const MAX_POINTS = 14000;

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uMorph;
  uniform float uScatter;
  uniform vec3  uMouse;
  uniform float uSize;
  uniform float uPixelRatio;
  attribute vec3 aStart;
  attribute vec3 aTarget;
  attribute float aRandom;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    // Rassemblement en forme de logo, avec un départ décalé par particule.
    float t = clamp((uMorph - aRandom * 0.35) / 0.65, 0.0, 1.0);
    t = 1.0 - pow(1.0 - t, 3.0);
    vec3 p = mix(aStart, aTarget, t);

    // Respiration / ondulation permanente.
    p.z += sin(uTime * 0.9 + aTarget.x * 2.2 + aRandom * 6.28) * 0.06;
    p.x += cos(uTime * 0.7 + aTarget.y * 2.0) * 0.015;

    // Le curseur creuse le nuage.
    vec3 d = p - uMouse;
    float dist = length(d.xy);
    float push = smoothstep(0.55, 0.0, dist) * 0.45;
    p.xy += normalize(d.xy + 0.0001) * push;
    p.z += push * 0.6;

    // Dispersion au défilement.
    p += (aStart - aTarget) * uScatter * (0.6 + aRandom);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixelRatio * (0.6 + aRandom * 0.9) * (1.0 / -mv.z);
    vColor = aColor;
    vAlpha = (0.55 + aRandom * 0.45) * (1.0 - uScatter * 0.8);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c);
    if (r > 0.5) discard;
    float soft = smoothstep(0.5, 0.0, r);
    gl_FragColor = vec4(vColor, vAlpha * soft);
  }
`;

/** Échantillonne la silhouette du scarabée dans le logo (découpe transparente dans le disque teal). */
function sampleLogo(img: HTMLImageElement): Float32Array {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = SAMPLE;
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  ctx.drawImage(img, 0, 0, SAMPLE, SAMPLE);
  const data = ctx.getImageData(0, 0, SAMPLE, SAMPLE).data;
  const pts: number[] = [];
  for (let y = 0; y < SAMPLE; y++) {
    for (let x = 0; x < SAMPLE; x++) {
      const i = (y * SAMPLE + x) * 4;
      // Le scarabée est découpé (transparent) dans le disque teal : on garde les pixels
      // transparents situés à l'intérieur du disque.
      const dx = x / SAMPLE - 0.5;
      const dy = y / SAMPLE - 0.5;
      const insideDisc = dx * dx + dy * dy < 0.46 * 0.46;
      const cutout = data[i + 3] < 128 || (data[i] > 200 && data[i + 1] > 200 && data[i + 2] > 200);
      if (insideDisc && cutout) pts.push(dx * 2.6, -dy * 2.6);
    }
  }
  return new Float32Array(pts);
}

interface HeroSceneProps {
  /** 0 → 1 : progression du défilement du hero (dispersion). */
  scrollProgress?: { get: () => number };
  dark: boolean;
  className?: string;
}

export default function HeroScene({ scrollProgress, dark, className }: HeroSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const darkRef = useRef(dark);
  darkRef.current = dark;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
    const pixelRatio = Math.min(window.devicePixelRatio, 1.75);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const scene = new Scene();
    const camera = new PerspectiveCamera(40, mount.clientWidth / mount.clientHeight, 0.1, 50);
    camera.position.set(0, 0, 5.2);

    const uniforms = {
      uTime: { value: 0 },
      uMorph: { value: 0 },
      uScatter: { value: 0 },
      uMouse: { value: new Vector3(10, 10, 0) },
      uSize: { value: 22 },
      uPixelRatio: { value: pixelRatio },
    };

    const material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: darkRef.current ? AdditiveBlending : NormalBlending,
    });

    let points: Points | null = null;
    let geometry: BufferGeometry | null = null;
    let disposed = false;

    // Palette irisée (clair : tons profonds lisibles sur blanc ; sombre : tons lumineux)
    const paletteLight = ["#007a7a", "#3c4fe0", "#e2602a", "#0aa39a"].map((c) => new Color(c));
    const paletteDark = ["#3ce0d0", "#7b88ff", "#ff8a4d", "#00c2c2"].map((c) => new Color(c));

    const buildColors = (targets: Float32Array, count: number, isDark: boolean) => {
      const palette = isDark ? paletteDark : paletteLight;
      const colors = new Float32Array(count * 3);
      const tmp = new Color();
      for (let i = 0; i < count; i++) {
        // dégradé selon la position (gauche-bas → droite-haut), comme les objets irisés des références
        const x = targets[i * 3];
        const y = targets[i * 3 + 1];
        const k = MathUtils.clamp((x + y) / 2.6 + 0.5, 0, 1) * (palette.length - 1);
        const a = Math.floor(k);
        const b = Math.min(a + 1, palette.length - 1);
        tmp.copy(palette[a]).lerp(palette[b], k - a);
        colors.set([tmp.r, tmp.g, tmp.b], i * 3);
      }
      return colors;
    };

    const img = new Image();
    img.decoding = "async";
    img.src = LOGO_SRC;
    img.onload = () => {
      if (disposed) return;
      const flat = sampleLogo(img);
      const available = flat.length / 2;
      const count = Math.min(MAX_POINTS, available * 2);
      const start = new Float32Array(count * 3);
      const target = new Float32Array(count * 3);
      const random = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        const j = Math.floor(Math.random() * available);
        target[i * 3] = flat[j * 2] + (Math.random() - 0.5) * 0.02;
        target[i * 3 + 1] = flat[j * 2 + 1] + (Math.random() - 0.5) * 0.02;
        target[i * 3 + 2] = (Math.random() - 0.5) * 0.25;
        // départ : coquille sphérique large (effet « galaxie » qui se condense)
        const u = Math.random() * Math.PI * 2;
        const v = Math.acos(2 * Math.random() - 1);
        const r = 3.2 + Math.random() * 2.5;
        start[i * 3] = r * Math.sin(v) * Math.cos(u);
        start[i * 3 + 1] = r * Math.sin(v) * Math.sin(u);
        start[i * 3 + 2] = r * Math.cos(v) - 1.5;
        random[i] = Math.random();
      }

      geometry = new BufferGeometry();
      geometry.setAttribute("position", new BufferAttribute(target, 3));
      geometry.setAttribute("aTarget", new BufferAttribute(target, 3));
      geometry.setAttribute("aStart", new BufferAttribute(start, 3));
      geometry.setAttribute("aRandom", new BufferAttribute(random, 1));
      geometry.setAttribute("aColor", new BufferAttribute(buildColors(target, count, darkRef.current), 3));
      points = new Points(geometry, material);
      points.frustumCulled = false;
      scene.add(points);
    };

    // Souris → coordonnées dans le plan du logo
    const mouseTarget = new Vector3(10, 10, 0);
    const onMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      const h = Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
      mouseTarget.set(nx * h * camera.aspect, ny * h, 0);
    };
    const onLeave = () => mouseTarget.set(10, 10, 0);
    window.addEventListener("pointermove", onMove, { passive: true });
    mount.addEventListener("pointerleave", onLeave);

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    // Pause hors écran
    let visible = true;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0 });
    io.observe(mount);

    let lastDark = darkRef.current;
    const clock = new Clock();
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const dt = Math.min(clock.getDelta(), 0.05);
      uniforms.uTime.value += dt;
      uniforms.uMorph.value = Math.min(1, uniforms.uMorph.value + dt * 0.45);
      uniforms.uMouse.value.lerp(mouseTarget, 0.08);
      const s = scrollProgress?.get() ?? 0;
      uniforms.uScatter.value += (s - uniforms.uScatter.value) * 0.12;

      // changement de thème : couleurs et mode de fusion
      if (darkRef.current !== lastDark && geometry) {
        lastDark = darkRef.current;
        const target = geometry.getAttribute("aTarget").array as Float32Array;
        geometry.setAttribute("aColor", new BufferAttribute(buildColors(target, target.length / 3, lastDark), 3));
        material.blending = lastDark ? AdditiveBlending : NormalBlending;
        material.needsUpdate = true;
      }

      if (points) {
        points.rotation.y = Math.sin(uniforms.uTime.value * 0.25) * 0.35 + uniforms.uMouse.value.x * 0.05;
        points.rotation.x = Math.cos(uniforms.uTime.value * 0.2) * 0.12;
      }
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      mount.removeEventListener("pointerleave", onLeave);
      ro.disconnect();
      io.disconnect();
      geometry?.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [scrollProgress]);

  return <div ref={mountRef} className={className} aria-hidden />;
}

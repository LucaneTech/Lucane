/**
 * Mise en page commune des pages (phase 4) : barre de navigation en pilule, contenu de la page, pied de page.
 * Le nom « Navbar » est conservé pour ne pas changer le routage de App.tsx.
 */
import { Outlet } from "react-router-dom";
import SiteHeader from "./layout/SiteHeader";
import SiteFooter from "./layout/SiteFooter";

// eslint-disable-next-line react-refresh/only-export-components
export { logo, logoLight } from "./layout/SiteHeader";

export default function Navbar() {
  return (
    <>
      <SiteHeader />
      <main id="contenu">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}

import { logo } from "../components/Navbar";
const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <div className="flex items-center gap-3 mb-2">
        <img src={logo} alt="Logo" className="w-24 h-24 object-contain" />
        <span className="text-3xl font-extrabold main-color tracking-wide"></span>
        {/* Ajoute ici ton logo si tu en as */}
      </div>
      <div className="flex gap-2">
        <span className="w-4 h-4 rounded-full bg-main-color animate-bounce"></span>
        <span className="w-4 h-4 rounded-full bg-secondary-color animate-bounce [animation-delay:.2s]"></span>
        <span className="w-4 h-4 rounded-full bg-yellow-400 animate-bounce [animation-delay:.4s]"></span>
      </div>
      <span className="mt-6 text-gray-500 text-lg font-medium">Chargement...</span>
    </div>
  );
};

export default Loader;
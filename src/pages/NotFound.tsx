import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-24 h-24 bg-slate-900 rounded-[32px] flex items-center justify-center border border-slate-800 mb-8 text-amber-400">
        <span className="text-4xl font-black">404</span>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">You've reached deep space.</h1>
      <p className="text-slate-400 max-w-sm mb-12 leading-relaxed">
        This machine deal or page doesn't exist yet, or it has been relocated by our AI systems.
      </p>
      <Link 
        to="/" 
        className="bg-amber-400 text-slate-950 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-amber-500 transition-all shadow-lg shadow-amber-400/10"
      >
        <Home className="w-5 h-5" />
        Return to Home
      </Link>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Menu, X, Wallet, LayoutDashboard, Settings } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Explore Deals", href: "/deals" },
    { name: "ROI Calculator", href: "/calculator" },
    { name: "How it Works", href: "/how-it-works" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-500/30 group-hover:rotate-[15deg] transition-all duration-500 border border-white/20">
                <Settings className="w-7 h-7 animate-spin-slow" />
              </div>
              <span className="text-3xl font-display font-black tracking-tighter text-slate-900">ARTHA</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-slate-500 hover:text-orange-600 font-bold transition-all text-xs uppercase tracking-[0.2em] hover:tracking-[0.25em]"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/login"
                className="bg-orange-600 text-white px-8 py-3 rounded-2xl font-bold hover:shadow-xl hover:shadow-orange-500/40 transition-all flex items-center gap-2 border border-orange-400/20 active:scale-95"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-orange-600 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-slate-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block px-3 py-3 rounded-xl text-base font-bold text-slate-600 hover:text-orange-600 hover:bg-orange-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="block w-full text-center bg-orange-600 text-white px-3 py-4 rounded-2xl font-bold mt-4 shadow-lg shadow-orange-500/20"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

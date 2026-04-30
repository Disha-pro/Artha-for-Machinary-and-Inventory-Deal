import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, MapPin, Mail, Phone, Settings } from "lucide-react";
import Disclaimer from "./Disclaimer";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-500/30 group-hover:rotate-12 transition-transform border border-white/20">
                <Settings className="w-7 h-7 animate-spin-slow" />
              </div>
              <span className="text-3xl font-display font-black tracking-tighter text-slate-900">ARTHA</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs font-semibold">
              Empowering the backbone of Indian industry through structured machine financing and private capital integration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-orange-600 border border-slate-100 transition-all hover:shadow-premium">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-orange-600 border border-slate-100 transition-all hover:shadow-premium">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-8">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/deals" className="text-slate-500 hover:text-orange-600 text-sm font-bold transition-colors">Invest in Deals</Link></li>
              <li><Link to="/calculator" className="text-slate-500 hover:text-orange-600 text-sm font-bold transition-colors">ROI Calculator</Link></li>
              <li><Link to="/how-it-works" className="text-slate-500 hover:text-orange-600 text-sm font-bold transition-colors">How it Works</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-orange-600 text-sm font-bold transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-8">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-orange-600 text-sm font-bold transition-colors">FAQ</a></li>
              <li><a href="#" className="text-slate-500 hover:text-orange-600 text-sm font-bold transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-slate-500 hover:text-orange-600 text-sm font-bold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-orange-600 text-sm font-bold transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-8">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500 text-sm font-bold leading-relaxed">
                <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span>Navi Mumbai, MH, India</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm font-bold leading-relaxed">
                <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span>trust@artha.ai</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm font-bold leading-relaxed">
                <Phone className="w-5 h-5 text-sky-600 flex-shrink-0" />
                <span>+91 1800-ARTHA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-12 mt-12 bg-slate-50/50 rounded-3xl p-8">
          <Disclaimer className="mb-6 text-center max-w-4xl mx-auto" />
          <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Artha Capital. All rights reserved. Precision Built for Indian Industry.
          </p>
        </div>
      </div>
    </footer>
  );
}

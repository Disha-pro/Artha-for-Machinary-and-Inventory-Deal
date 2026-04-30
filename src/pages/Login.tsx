import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { 
  CircleUser, ShieldCheck, Mail, LogIn, ChevronRight, 
  Settings, Building2, TrendingUp, Handshake 
} from "lucide-react";
import { cn } from "../lib/utils";

export default function Login() {
  const [step, setStep] = useState<"auth" | "role">("auth");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Simulation: In reality, use Firebase Auth popup
    setStep("role");
  };

  const handleRoleSelect = (role: string) => {
    // Simulation: Save role to profile and navigate
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-[#F8FAFC]">
      <div className="w-full max-w-lg bg-white border border-slate-200 rounded-[56px] overflow-hidden shadow-huge">
        <div className="bg-orange-600 p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20">
                <Settings className="w-8 h-8 animate-spin-slow text-white" />
              </div>
              <span className="text-4xl font-display font-black tracking-tighter">ARTHA</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight mb-3">
              {step === "auth" ? "Secure Portal" : "Identity Setup"}
            </h2>
            <p className="font-bold opacity-80 uppercase tracking-[0.3em] text-[11px]">
              {step === "auth" ? "Industrial Capital Gateway" : "Personalize your dashboard"}
            </p>
          </div>
        </div>

        <div className="p-12 md:p-16">
          {step === "auth" ? (
            <div className="space-y-12">
              <button 
                onClick={handleGoogleLogin}
                className="w-full h-16 bg-white text-slate-950 rounded-[24px] flex items-center justify-center gap-4 font-bold hover:bg-slate-50 transition-all shadow-premium border border-slate-200 active:scale-95"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
                Sign in with Google
              </button>

              <div className="relative flex items-center gap-8 py-2">
                <div className="flex-1 h-[2px] bg-slate-100"></div>
                <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">Vault Security</span>
                <div className="flex-1 h-[2px] bg-slate-100"></div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center group hover:bg-orange-50 transition-all duration-500">
                  <ShieldCheck className="w-10 h-10 text-orange-600 mx-auto mb-4 transition-transform group-hover:scale-110" />
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-tight">ISO-SECURED<br/>NETWORK</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center group hover:bg-sky-50 transition-all duration-500">
                  <Handshake className="w-10 h-10 text-sky-600 mx-auto mb-4 transition-transform group-hover:scale-110" />
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-tight">TRANSPARENT<br/>AUDIT TRAILS</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  By joining, you agree to our <a href="#" className="text-slate-300 underline font-medium">Terms of Service</a> and <a href="#" className="text-slate-300 underline font-medium">Privacy Policy</a>.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <button 
                onClick={() => handleRoleSelect("investor")}
                className="w-full p-8 bg-slate-950 border border-slate-800 rounded-3xl text-left group hover:border-amber-400 transition-all flex items-center gap-6"
              >
                <div className="w-16 h-16 bg-amber-400/10 rounded-2xl flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-1">I'm an Investor</h4>
                  <p className="text-slate-500 text-sm">I want to fund machines and earn monthly returns.</p>
                </div>
                <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-amber-400 translate-x-0 group-hover:translate-x-1 transition-all" />
              </button>

              <button 
                onClick={() => handleRoleSelect("business")}
                className="w-full p-8 bg-slate-950 border border-slate-800 rounded-3xl text-left group hover:border-amber-400 transition-all flex items-center gap-6"
              >
                <div className="w-16 h-16 bg-amber-400/10 rounded-2xl flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                  <Building2 className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-1">I'm a Business Owner</h4>
                  <p className="text-slate-500 text-sm">I need funding for industrial machines to grow.</p>
                </div>
                <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-amber-400 translate-x-0 group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

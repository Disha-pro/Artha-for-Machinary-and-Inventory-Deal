import { Link } from "react-router-dom";
import { 
  ArrowRight, ShieldCheck, FileCheck, BrainCircuit, 
  TrendingUp, CircleDollarSign, CheckCircle2, ChevronRight,
  TrendingDown, Info, Settings
} from "lucide-react";
import { motion } from "motion/react";
import Disclaimer from "../components/Disclaimer";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Home() {
  const [waitlistStatus, setWaitlistStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleWaitlistSubmit = (e: any) => {
    e.preventDefault();
    setWaitlistStatus("submitting");
    setTimeout(() => setWaitlistStatus("success"), 1500);
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[#F8FAFC]">
        {/* Deep Industrial Background - Subtle & Elegant */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.2] grayscale-0 transition-opacity duration-1000 group-hover:opacity-30"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1579154235828-444766861706?auto=format&fit=crop&q=80&w=2000')`,
            }}
          ></div>
          {/* Light Gradients */}
          <div className="absolute top-1/4 -left-20 w-[1000px] h-[1000px] bg-indigo-500/10 rounded-full blur-[160px] animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-[1000px] h-[1000px] bg-orange-500/10 rounded-full blur-[160px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:100px_100px] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold uppercase tracking-[0.3em] mb-12 shadow-sm">
                <Settings className="w-4 h-4 animate-spin-slow" />
                Premium Industrial Asset Finance
              </div>
              <h1 className="text-7xl md:text-[100px] font-display font-black leading-[0.85] mb-10 tracking-[-0.05em] text-slate-900">
                Turn <br />
                <span className="text-gradient">Machinery</span> <br />
                Into <span className="text-slate-900">Assets</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 mb-14 max-w-xl leading-relaxed font-medium">
                Artha connects heavy industry with private capital. Earn structured yields by funding the machines that power the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/deals" className="btn-premium bg-orange-600 text-white text-xl py-5 flex items-center justify-center gap-4 group">
                  Explore Deals
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/calculator" className="btn-premium bg-white border border-slate-200 text-slate-600 text-xl py-5 hover:bg-slate-50 shadow-sm">
                  ROI Simulator
                </Link>
              </div>

              <div className="mt-20 flex flex-wrap items-center gap-12">
                {[
                  { label: "Assets", val: "₹4.5 Cr+" },
                  { label: "Yield", val: "18-24%" },
                  { label: "Status", val: "Verified" }
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col gap-1 border-l-2 border-slate-200 pl-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">{stat.label}</span>
                    <span className="text-2xl font-black text-slate-950 italic">{stat.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:block perspective-1000"
            >
              <div className="relative z-10 glass-industrial p-3 rounded-[56px] border border-white threed-hover group animate-float">
                <div className="relative rounded-[44px] overflow-hidden shadow-huge border-4 border-white ring-4 ring-orange-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=1200" 
                    alt="Precision Medical Unit" 
                    className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-orange-400/20 via-transparent to-transparent"></div>
                </div>
                
                <div className="absolute bottom-12 left-12 right-12">
                  <motion.div 
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white/95 backdrop-blur-3xl p-10 rounded-[32px] border border-white shadow-huge"
                  >
                    <div className="flex justify-between items-center mb-8">
                       <div className="px-4 py-1.5 bg-indigo-100 border border-indigo-200 rounded-xl">
                        <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-[0.2em] italic">Open Opportunity</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Medical Node Deployment</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-display font-black text-slate-900 mb-8 leading-tight">Advanced MRI Core #92<br/><span className="text-indigo-500 text-lg font-bold tracking-normal italic">Precision Health, KA</span></h3>
                    <div className="grid grid-cols-2 gap-10 border-t border-slate-100 pt-8">
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Annualized ROI</p>
                        <p className="text-3xl font-black text-orange-600 italic">19.8% <span className="text-sm font-medium text-slate-400 not-italic tracking-wider">p.a</span></p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Asset Type</p>
                        <p className="text-3xl font-black text-slate-900 italic">Medical <span className="text-sm font-medium text-slate-400">✓</span></p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Floating Orbitals */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-12 -right-12 bg-white p-8 rounded-3xl border border-slate-100 shadow-huge z-20"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 shadow-sm">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Yield Type</p>
                    <p className="text-2xl font-black text-slate-900">High Stable</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            <div className="flex items-center gap-3 text-slate-500 group">
              <ShieldCheck className="w-6 h-6 text-orange-600 transition-transform group-hover:scale-110" />
              <span className="text-sm font-bold uppercase tracking-widest">Escrow Protected</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500 group">
              <FileCheck className="w-6 h-6 text-orange-600 transition-transform group-hover:scale-110" />
              <span className="text-sm font-bold uppercase tracking-widest">GST Verified Deals</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500 group">
              <CircleDollarSign className="w-6 h-6 text-orange-600 transition-transform group-hover:scale-110" />
              <span className="text-sm font-bold uppercase tracking-widest">Asset-Backed Yield</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500 group">
              <BrainCircuit className="w-6 h-6 text-orange-600 transition-transform group-hover:scale-110" />
              <span className="text-sm font-bold uppercase tracking-widest">Neural Risk Scoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-black mb-6 tracking-tight text-slate-900">Precision <span className="text-orange-600">Alpha</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Artha outperforms traditional Indian investment vehicles by targeting high-performance industrial assets.
            </p>
          </div>

          <div className="overflow-x-auto perspective-1000">
            <table className="w-full border-collapse bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-premium">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-8 py-8 text-left text-indigo-900 font-black uppercase tracking-widest text-[10px]">Strategic Asset Class</th>
                  <th className="px-8 py-8 text-left text-slate-400 font-bold uppercase tracking-widest text-[10px]">Yield Anchor</th>
                  <th className="px-8 py-8 text-left text-slate-400 font-bold uppercase tracking-widest text-[10px]">Security Logic</th>
                  <th className="px-8 py-8 text-left text-orange-600 font-black uppercase tracking-widest text-[10px]">The Artha Delta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-8">
                    <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-600 font-black text-xs uppercase tracking-tight">Fixed Deposit</span>
                  </td>
                  <td className="px-8 py-8 text-slate-500 font-bold text-lg">6.5% <span className="text-xs">Avg.</span></td>
                  <td className="px-8 py-8 text-slate-400 font-medium">Bank Restricted</td>
                  <td className="px-8 py-8 text-slate-400 font-bold italic">Linear</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors font-bold bg-violet-50/50">
                  <td className="px-8 py-8">
                    <span className="px-3 py-1 bg-violet-600 rounded-lg text-white font-black text-xs uppercase tracking-tight">Equity MF</span>
                  </td>
                  <td className="px-8 py-8 text-violet-600 font-black text-lg">12% - 15%</td>
                  <td className="px-8 py-8 text-violet-400 font-medium italic">High Volatility</td>
                  <td className="px-8 py-8 text-violet-600 font-black uppercase tracking-widest text-[10px]">Market Correlation</td>
                </tr>
                <tr className="bg-orange-600 text-white shadow-huge z-10 relative">
                  <td className="px-8 py-10">
                    <div className="flex flex-col">
                      <span className="font-black text-2xl tracking-tighter italic">MACHINE LEASING</span>
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-80">Precision Industrial</span>
                    </div>
                  </td>
                  <td className="px-8 py-10">
                    <div className="flex items-baseline gap-1">
                      <span className="font-black text-4xl italic tracking-tighter">18.4%</span>
                      <span className="text-xs opacity-80">Alpha</span>
                    </div>
                  </td>
                  <td className="px-8 py-10">
                    <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest">
                       <ShieldCheck className="w-5 h-5 text-white" /> HARD ASSET
                    </div>
                  </td>
                  <td className="px-8 py-10 flex flex-col gap-2">
                    <span className="px-4 py-1.5 bg-white text-orange-600 rounded-lg text-[10px] font-black uppercase tracking-widest text-center shadow-lg">Target Alpha</span>
                    <span className="text-[8px] text-center opacity-60 font-black uppercase tracking-widest">Compounded Monthly</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-center">
            <Disclaimer type="page" className="max-w-3xl text-center" />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl font-display font-black mb-8 tracking-tight text-slate-900 leading-[1.1]">Precision <br/>Flow Control</h2>
              <p className="text-slate-500 text-xl mb-12 leading-relaxed font-medium">
                We've built a robust digital process that eliminates the complexity of traditional lending while maximizing transparency through AI.
              </p>
              
              <div className="space-y-12">
                {[
                  { title: "Browse & Analyze", desc: "Explore AI-scored machine deals with verified business data and income projections.", icon: BrainCircuit },
                  { title: "Digital Closure", desc: "Select a deal, sign a digital agreement, and transfer funds via secure escrow.", icon: ShieldCheck },
                  { title: "Automated Yields", desc: "Receive monthly revenue shares directly to your bank account as the machine operates.", icon: TrendingUp }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-orange-600 shadow-premium transition-transform group-hover:scale-110 duration-500">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{step.title}</h4>
                      <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-orange-400/5 rounded-full blur-[120px]"></div>
              <div className="relative grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-premium hover:shadow-huge transition-all group">
                    <h5 className="font-black mb-3 text-slate-900 uppercase tracking-tight">CNC Center</h5>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">Heavy Manufacturing</p>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <span className="text-orange-600 font-black italic text-xl">22% ROI</span>
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-premium hover:shadow-huge transition-all group">
                    <h5 className="font-black mb-3 text-slate-900 uppercase tracking-tight">Textile Hub</h5>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">Industrial Apparel</p>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <span className="text-orange-600 font-black italic text-xl">19% ROI</span>
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-premium hover:shadow-huge transition-all group">
                    <h5 className="font-black mb-3 text-slate-900 uppercase tracking-tight">Solar Grid</h5>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">Renewable Energy</p>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <span className="text-orange-600 font-black italic text-xl">16% ROI</span>
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                  <div className="machinery-gradient p-10 rounded-[40px] text-white shadow-huge flex flex-col justify-center">
                    <h3 className="text-4xl font-black italic mb-2 tracking-tighter">ALPHA</h3>
                    <p className="text-[11px] font-black uppercase tracking-[0.3em] opacity-80">Pilot Phase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="machinery-gradient rounded-[64px] p-12 md:p-20 text-white relative overflow-hidden shadow-huge perspective-1000">
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-5xl md:text-6xl font-display font-black tracking-tighter mb-8 leading-tight">Join the Industrial <span className="italic opacity-80 underline underline-offset-8">Alpha</span></h2>
                  <p className="text-xl font-bold opacity-90 mb-0 leading-relaxed border-l-4 border-white/30 pl-8">
                    Be among the first 100 stakeholders to access vetted high-yield machinery contracts.
                  </p>
                </div>
                <div className="glass-industrial p-1 rounded-[32px] border-white/20">
                  {waitlistStatus === "success" ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white/10 backdrop-blur-3xl rounded-[28px] p-10 border border-white/20 flex flex-col items-center text-center shadow-huge"
                    >
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 text-orange-600 shadow-xl">
                        <CheckCircle2 className="w-12 h-12" />
                      </div>
                      <h3 className="text-3xl font-black mb-2">Stake Confirmed</h3>
                      <p className="font-bold opacity-90">Priority deployment access secured.</p>
                      <div className="mt-8 text-5xl font-black italic">#47</div>
                      <p className="text-[10px] uppercase font-black tracking-[0.3em] mt-2 opacity-50">Global Priority</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleWaitlistSubmit} className="space-y-5 p-10 bg-white/5 backdrop-blur-sm rounded-[28px]">
                      <div className="space-y-4">
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          required
                          className="w-full px-8 py-5 rounded-2xl bg-white/10 border border-white/20 placeholder:text-white/50 text-white font-bold focus:outline-none focus:ring-4 focus:ring-white/10 transition-all"
                        />
                        <input 
                          type="email" 
                          placeholder="Professional Email" 
                          required
                          className="w-full px-8 py-5 rounded-2xl bg-white/10 border border-white/20 placeholder:text-white/50 text-white font-bold focus:outline-none focus:ring-4 focus:ring-white/10 transition-all"
                        />
                      </div>
                      <div className="flex bg-white/10 border border-white/20 rounded-2xl p-1.5">
                        <button 
                          type="button" 
                          className="flex-1 py-4 px-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] bg-white text-orange-600 shadow-xl"
                        >
                          Capital
                        </button>
                        <button 
                          type="button" 
                          className="flex-1 py-4 px-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                        >
                          Business
                        </button>
                      </div>
                      <button 
                        type="submit" 
                        disabled={waitlistStatus === "submitting"}
                        className="w-full bg-slate-950 text-white py-6 rounded-2xl font-black text-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-4 active:scale-[0.98] shadow-huge"
                      >
                        {waitlistStatus === "submitting" ? "Processing..." : "Claim Secure Access"}
                        <ChevronRight className="w-7 h-7" />
                      </button>
                      <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] opacity-40">228 verified stakeholders in queue</p>
                    </form>
                  )}
                </div>
              </div>
            </div>
            
            {/* Decors */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-[150px] -mt-[150px] blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-950/10 rounded-full -ml-[150px] -mb-[150px] blur-[120px]"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-black tracking-tight mb-6 text-slate-900 leading-tight">Expert <br/><span className="text-orange-600">Guidance</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Artha Protocol Knowledge Base</p>
          </div>

          <div className="space-y-6">
            {[
              { q: "Is Artha RBI regulated?", a: "We operate as a digital marketplace for commercial lease agreements between private entities. All transactions are legally binding under Indian contract law, moving through secure banking channels." },
              { q: "Capital Entry Barrier?", a: "The pilot phase supports entries from ₹50,000 for individual machines. This lower cap allows diversified allocation across various high-utility industrial assets." },
              { q: "ROI Distribution Logic?", a: "Revenue shares are computed based on actual machine uptime and production output. Payouts are pushed directly to your registered bank account on the 10th of every month." },
              { q: "Risk Mitigation Strategy?", a: "We focus on 'essential' machinery with high resale value. Artha acts as the asset custodian, ensuring the machine is insured and professionally maintained throughout the lease term." }
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-[32px] border border-slate-100 shadow-premium overflow-hidden transition-all duration-500 hover:shadow-huge">
                <summary className="flex items-center justify-between p-8 cursor-pointer select-none">
                  <span className="font-black text-slate-800 text-lg uppercase tracking-tight">{item.q}</span>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-open:rotate-180 transition-transform">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </summary>
                <div className="px-8 pb-8 text-slate-500 text-base leading-relaxed font-medium border-t border-slate-50 pt-6">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

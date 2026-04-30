import { motion } from "motion/react";
import { 
  Search, 
  ShieldCheck, 
  TrendingUp, 
  Coins, 
  ArrowRight,
  Handshake,
  CheckCircle2,
  Workflow
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "Vetting & Selection",
    desc: "Our AI-driven protocol evaluates MSME units based on 150+ operational data points, GST filings, and machinery health.",
    icon: Search,
    color: "bg-indigo-600",
  },
  {
    title: "Lease Configuration",
    desc: "Assets are structured into fractional lease nodes. Investors can allocate capital starting from ₹50,000.",
    icon: Workflow,
    color: "bg-orange-600",
  },
  {
    title: "Yield Generation",
    desc: "Revenue is generated through machine utilization. Net profits are distributed monthly directly to your dashboard.",
    icon: TrendingUp,
    color: "bg-emerald-600",
  },
  {
    title: "Asset Management",
    desc: "Artha manages end-to-end maintenance and operator relations, ensuring 98%+ uptime for your investment.",
    icon: ShieldCheck,
    color: "bg-slate-900",
  }
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl font-display font-black text-slate-900 mb-6 tracking-tighter"
          >
            The Artha <span className="text-orange-600 italic">Protocol</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg font-medium"
          >
            A high-efficiency bridge between private capital and industrial growth. Transparency meets architectural yield.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-premium group hover:border-orange-200 transition-all"
            >
              <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-black text-slate-900 mb-4 tracking-tight">{step.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed italic">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-[64px] border border-slate-100 p-12 md:p-20 shadow-huge">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-black text-slate-900 mb-8 tracking-tighter uppercase">Why Machinary Leasing?</h2>
              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">Hard Asset Protection</h4>
                    <p className="text-slate-500 text-sm">Your capital is backed by physical industrial equipment, not just balance sheet promises.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">Non-Market Correlation</h4>
                    <p className="text-slate-500 text-sm">Lease rental yields are independent of stock market volatility, providing stability in all cycles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">Monthly Cashflow</h4>
                    <p className="text-slate-500 text-sm">Dividend-like payouts distributed directly from net operational revenue share.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-900 rounded-[48px] p-12 text-white shadow-huge relative z-10">
                <Handshake className="w-16 h-16 text-orange-500 mb-8" />
                <h3 className="text-3xl font-display font-black mb-6 italic tracking-tighter">Verified Partnership</h3>
                <p className="text-slate-400 mb-10 leading-relaxed font-medium">
                  We verify every MSME unit through a rigorous 4-week physical and financial audit protocol. We don't just finance; we partner.
                </p>
                <Link 
                  to="/deals" 
                  className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-orange-500 hover:text-white transition-all shadow-xl group"
                >
                  Explore Deals
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-[80px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

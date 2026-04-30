import { useParams, Link } from "react-router-dom";
import { 
  MapPin, ShieldCheck, BrainCircuit, Users, TrendingUp, 
  Calendar, FileText, CheckCircle2, ChevronRight, Info,
  AlertTriangle, Hammer
} from "lucide-react";
import Disclaimer from "../components/Disclaimer";
import { cn } from "../lib/utils";
import { useState } from "react";

const SAMPLE_DEALS = [
  {
    id: "1",
    title: "Precision CNC Lathe - Nashik Unit",
    category: "Manufacturing",
    location: "Nashik, Maharashtra",
    risk: "low",
    aiScore: 88,
    returnRange: "14-18%",
    duration: "24 Months",
    minInvestment: "₹50,000",
    fundingGoal: 1200000,
    fundedAmount: 840000,
    investors: 12,
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=1000",
    description: "Expansion project for a verified auto-parts manufacturer in Nashik. The capital will fund a new high-precision CNC lathe to meet growing orders from major OEMs. The business has been operational for 8 years with consistent profitability.",
    machineSpecs: {
      "Model": "HMT T-70 Elite",
      "Power": "15kW",
      "Spindle Speed": "4500 RPM",
      "Warranty": "3 Years"
    },
    businessInfo: {
      name: "Advance Auto Components",
      type: "Private Limited",
      years: "8 Years",
      gst: "27AAAAA0000A1Z5"
    }
  }
];

export default function DealDetail() {
  const { id } = useParams();
  const deal = SAMPLE_DEALS.find(d => d.id === id) || SAMPLE_DEALS[0];
  const [showInterestModal, setShowInterestModal] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-2 text-slate-500 text-sm mb-8">
        <Link to="/deals" className="hover:text-amber-400">Marketplace</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-slate-300">{deal.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-12">
          <section>
            <div className="relative h-[400px] rounded-[40px] overflow-hidden border border-slate-800 mb-8">
              <img src={deal.image} alt={deal.title} className="w-full h-full object-cover" />
              <div className="absolute top-6 left-6 flex gap-3">
                <span className="bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-emerald-400 flex items-center gap-2 border border-slate-700">
                  <ShieldCheck className="w-4 h-4" />
                  GST Verified
                </span>
                <span className="bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-amber-400 flex items-center gap-2 border border-slate-700">
                  <CheckCircle2 className="w-4 h-4" />
                  Business Verified
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight mb-2">{deal.title}</h1>
                <div className="flex items-center gap-2 text-slate-400 font-medium">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  {deal.location}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-center min-w-[120px]">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Risk Rating</p>
                  <p className={cn(
                    "text-lg font-black uppercase tracking-widest",
                    deal.risk === "low" ? "text-emerald-400" : "text-amber-400"
                  )}>{deal.risk}</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-center min-w-[120px]">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">AI Score</p>
                  <p className="text-xl font-black text-slate-100">{deal.aiScore}/100</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-slate-400 leading-relaxed mb-12">
              {deal.description}
            </p>
          </section>

          <section className="bg-slate-900 rounded-[32px] p-8 border border-slate-800">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Hammer className="w-6 h-6 text-amber-400" />
              Machine Specifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(deal.machineSpecs).map(([key, value]) => (
                <div key={key}>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{key}</p>
                  <p className="text-slate-100 font-bold">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <BrainCircuit className="w-6 h-6 text-amber-400" />
              AI Insights
            </h3>
            <div className="bg-slate-900 rounded-[32px] p-8 border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <BrainCircuit className="w-24 h-24 text-amber-400" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                <div>
                  <h4 className="font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Strong Factors
                  </h4>
                  <ul className="space-y-4">
                    <li className="text-slate-400 text-sm flex gap-3">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0" />
                      Consistent historic demand for Nashik automotive cluster ensures machine utilization.
                    </li>
                    <li className="text-slate-400 text-sm flex gap-3">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0" />
                      Business has 2.4x interest coverage ratio, showing strong credit health.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-400 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Risk Considerations
                  </h4>
                  <ul className="space-y-4">
                    <li className="text-slate-400 text-sm flex gap-3">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 flex-shrink-0" />
                      Potential raw material price volatility could impact business net profit share.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-800 text-slate-500 text-xs italic">
                AI analysis is for informational purposes only and does not constitute financial advice.
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (Sticky) */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
          <div className="bg-slate-900 rounded-[40px] p-8 border border-slate-800 shadow-2xl">
            <div className="mb-8">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Funding Progress</p>
                  <p className="text-3xl font-black text-slate-100">₹{(deal.fundedAmount / 100000).toFixed(1)}L</p>
                </div>
                <p className="text-slate-400 font-bold text-sm">₹{(deal.fundingGoal / 100000).toFixed(1)}L Goal</p>
              </div>
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-amber-400 rounded-full" 
                  style={{ width: `${(deal.fundedAmount / deal.fundingGoal) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                <span>{Math.round((deal.fundedAmount / deal.fundingGoal) * 100)}% Funded</span>
                <span>{deal.investors} Investors</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Target Return</span>
                <span className="text-amber-400 font-black">{deal.returnRange} p.a.</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Duration</span>
                <span className="text-slate-100 font-bold">{deal.duration}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Min Invest</span>
                <span className="text-slate-100 font-bold">{deal.minInvestment}</span>
              </div>
            </div>

            <button 
              onClick={() => setShowInterestModal(true)}
              className="w-full bg-amber-400 text-slate-950 py-5 rounded-2xl font-black text-xl hover:bg-amber-500 transition-all shadow-[0_15px_30px_-5px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2 mb-6"
            >
              Express Interest
              <ChevronRight className="w-6 h-6" />
            </button>

            <Disclaimer type="page" className="text-center" />
          </div>

          <div className="mt-8 bg-slate-900/50 rounded-3xl p-6 border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-amber-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Historical Asset Yield</p>
              <p className="text-slate-200 font-bold">14.2% Net Avg.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Placeholder */}
      {showInterestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-[40px] p-8 md:p-12 relative">
            <button 
              onClick={() => setShowInterestModal(false)}
              className="absolute top-6 right-6 text-slate-500 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-400">
                <Mail className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black mb-4 tracking-tight">Interest Received!</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Thank you for your interest in the {deal.title}. While we are in the pilot phase, our relationship manager will contact you within 24 hours to guide you through the investment process.
              </p>
              <button 
                onClick={() => setShowInterestModal(false)}
                className="w-full bg-slate-800 text-slate-100 py-4 rounded-2xl font-bold hover:bg-slate-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  );
}

function Mail({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  );
}

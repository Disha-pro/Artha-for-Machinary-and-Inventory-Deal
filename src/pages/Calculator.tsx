import { useState, useEffect } from "react";
import { 
  Calculator as CalcIcon, Info, TrendingUp, CircleDollarSign, 
  ArrowRight, BrainCircuit, AlertTriangle, ChevronRight
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import Disclaimer from "../components/Disclaimer";
import { cn } from "../lib/utils";

export default function Calculator() {
  const [machineName, setMachineName] = useState("Industrial CNC Lathe");
  const [cost, setCost] = useState(1000000);
  const [revenue, setRevenue] = useState(150000);
  const [expenses, setExpenses] = useState(60000);
  const [investment, setInvestment] = useState(100000);
  const [duration, setDuration] = useState(24);
  const [investorShare, setInvestorShare] = useState(40);

  // Derived values
  const monthlyProfit = revenue - expenses;
  const platformShare = 10;
  const businessShare = 50;
  
  const investorTotalMonthly = (monthlyProfit * (investorShare / 100));
  const myMonthlyReturn = (investorTotalMonthly * (investment / cost));
  const annualRoi = (myMonthlyReturn * 12 / investment) * 100;
  const paybackMonths = cost / monthlyProfit;

  const data = [
    { name: "Fixed Deposit", value: 7, color: "#64748b" },
    { name: "Mutual Fund", value: 12, color: "#4f46e5" },
    { name: "Artha Deal", value: Math.round(annualRoi), color: "#f97316" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-6xl md:text-7xl font-display font-black tracking-tighter mb-4 flex items-center gap-6 bg-clip-text text-transparent bg-linear-to-r from-orange-600 via-fuchsia-500 to-indigo-600 animate-gradient-x">
          <div className="w-20 h-20 bg-orange-600 rounded-[32px] flex items-center justify-center text-white shadow-huge shadow-orange-500/30 rotate-3 group-hover:rotate-0 transition-transform">
            <CalcIcon className="w-11 h-11" />
          </div>
          ROI <span className="italic">Precision</span>
        </h1>
        <p className="text-slate-400 max-w-2xl text-xs font-black uppercase tracking-[0.4em] ml-26 mt-[-10px] flex items-center gap-2">
           <span className="w-8 h-[1px] bg-slate-200"></span> Architectural Yield Simulator
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Inputs */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white rounded-[40px] p-10 border border-slate-100 space-y-8 shadow-premium">
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Asset Designation</label>
                <input 
                  type="text" 
                  value={machineName}
                  onChange={(e) => setMachineName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-900 focus:outline-none focus:ring-4 focus:ring-orange-500/5 focus:border-orange-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Capital Requirement (₹)</label>
                <input 
                  type="number" 
                  value={cost}
                  onChange={(e) => setCost(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-900 focus:outline-none focus:ring-4 focus:ring-orange-500/5 focus:border-orange-500 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Mon Project (₹)</label>
                  <input 
                    type="number" 
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-900 focus:outline-none focus:ring-4 focus:ring-orange-500/5 focus:border-orange-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Operations (₹)</label>
                  <input 
                    type="number" 
                    value={expenses}
                    onChange={(e) => setExpenses(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-900 focus:outline-none focus:ring-4 focus:ring-orange-500/5 focus:border-orange-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Your Allocation (₹)</label>
                <input 
                  type="number" 
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-900 focus:outline-none focus:ring-4 focus:ring-orange-500/5 focus:border-orange-500 transition-all shadow-inner"
                />
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Lease Horizon</label>
                  <span className="text-orange-600 font-black text-sm uppercase tracking-tighter">{duration} Months</span>
                </div>
                <div className="px-2">
                  <input 
                    type="range" 
                    min="12" 
                    max="48" 
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full accent-orange-600 h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Outputs */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-premium group hover:border-orange-200 transition-colors">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Target Payout</p>
              <p className="text-4xl font-display font-black text-slate-900 italic tracking-tighter group-hover:text-orange-600 transition-colors">₹{Math.round(myMonthlyReturn).toLocaleString()}</p>
              <p className="text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-widest">Net Revenue Share</p>
            </div>
            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-premium group hover:border-orange-200 transition-colors">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Projected Yield</p>
              <p className="text-4xl font-display font-black text-orange-600 italic tracking-tighter">{annualRoi.toFixed(1)}%</p>
              <p className="text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-widest">Target APR</p>
            </div>
            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-premium group hover:border-orange-200 transition-colors">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Exit Window</p>
              <p className="text-4xl font-display font-black text-slate-900 italic tracking-tighter">{paybackMonths.toFixed(1)} <span className="text-xs uppercase font-black text-slate-300">Months</span></p>
              <p className="text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-widest">Full Payback</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-premium">
              <h3 className="font-black text-slate-900 mb-10 text-xl uppercase tracking-tight flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-orange-600" />
                Benchmarks
              </h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" stroke="#0f172a" fontSize={11} fontWeight={900} verticalAnchor="middle" width={110} />
                    <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ backgroundColor: '#fff', border: '1px solid #f1f5f9', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={40}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-10 border border-orange-500/20 shadow-huge relative overflow-hidden group bg-gradient-to-br from-white to-orange-50/30">
              <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <BrainCircuit className="w-56 h-56 text-orange-600" />
              </div>
              <h3 className="font-black text-slate-900 mb-8 text-xl uppercase tracking-tight flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                Industrial AI
              </h3>
              <div className="space-y-6">
                <p className="text-slate-600 text-base leading-relaxed font-semibold pr-4">
                  "For a Tier-2 Manufacturing unit, a net margin of {((monthlyProfit/revenue)*100).toFixed(0)}% aligns with <span className="text-orange-600 font-black italic">Precision Alpha</span> standards. The {paybackMonths.toFixed(0)}-month cycle is optimal for industrial liquidity."
                </p>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h5 className="text-[10px] font-black text-orange-600 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Strategic Note
                  </h5>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed italic">
                    "Evaluate maintenance uptime SLAs with the operator to ensure revenue continuity during festive cycles."
                  </p>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-slate-100">
                <button 
                  onClick={async () => {
                    const btn = document.getElementById('run-analysis-btn');
                    if (btn) btn.innerText = "Analyzing Node...";
                    try {
                      const res = await fetch("/api/ai/analyze-roi", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ machineName, cost, revenue, expenses, investment })
                      });
                      const data = await res.json();
                      alert("Artha Intel: " + data.analysis);
                    } catch (err) {
                      alert("Protocol Sync Failed. Retry.");
                    } finally {
                      if (btn) btn.innerText = "Execute Neural Scan";
                    }
                  }}
                  id="run-analysis-btn"
                  className="w-full h-16 rounded-2xl bg-slate-900 text-white text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 active:scale-[0.98]"
                >
                  Execute Neural Scan
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Disclaimer type="calculator" className="text-center" />
          </div>
        </div>
      </div>
    </div>
  );
}

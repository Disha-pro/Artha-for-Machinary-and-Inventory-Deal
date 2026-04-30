import { useState } from "react";
import { 
  Plus, LayoutDashboard, FileText, CheckCircle2, 
  AlertCircle, ChevronRight, ArrowUpRight, Upload,
  BrainCircuit, Info
} from "lucide-react";
import Disclaimer from "../components/Disclaimer";
import { cn } from "../lib/utils";

export default function MyDeals() {
  const [showReportForm, setShowReportForm] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Business Dashboard</h1>
          <p className="text-slate-400">Manage your machinery deals and performance reports.</p>
        </div>
        <button className="bg-amber-400 text-slate-950 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-amber-500 transition-all shadow-xl shadow-amber-400/10">
          <Plus className="w-5 h-5" />
          List New Machine
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-3">
          <div className="bg-slate-900 rounded-[40px] border border-slate-800 overflow-hidden">
            <div className="p-8 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-xl font-bold">Active Machine Deals</h3>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg">All Deals</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-950/50">
                    <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Machine / Deal</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Funded</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Revenue</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-8 py-6">
                      <p className="font-bold text-slate-100">Precision CNC Nashik</p>
                      <p className="text-xs text-slate-500">Unit ID: #C104</p>
                    </td>
                    <td className="px-8 py-6 text-right font-bold text-slate-300">₹12,00,000 / ₹12,00,000</td>
                    <td className="px-8 py-6 text-right">
                      <p className="font-bold text-emerald-400">₹1.8L</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">Last Month</p>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-emerald-400/10 text-emerald-400 rounded-lg border border-emerald-400/20">Operational</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setShowReportForm(true)}
                          className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-white transition"
                        >
                          Submit Report
                        </button>
                        <button className="p-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 hover:text-white">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-8 bg-slate-950/50 border-t border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-400/10 rounded-xl flex items-center justify-center text-amber-400 flex-shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200 mb-1">Upcoming Milestone</h4>
                  <p className="text-xs text-slate-500">Submit your July 2026 revenue report by 5th August to avoid platform alerts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-900 rounded-[40px] p-8 border border-slate-800">
            <h3 className="text-xl font-bold mb-8">Quick Stats</h3>
            <div className="space-y-6">
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Funded Machines</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-black text-slate-100">01</p>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Investor Payouts</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-black text-slate-100">₹84,200</p>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Business Retention</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-black text-slate-100">₹1,42,000</p>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-400 rounded-[40px] p-8 text-slate-950 relative overflow-hidden group">
            <div className="relative z-10">
              <BrainCircuit className="w-10 h-10 mb-4" />
              <h4 className="text-xl font-black mb-2 leading-tight">Scale Your Operation?</h4>
              <p className="text-sm font-bold opacity-80 mb-6">Our AI suggests you could profitably add a Laser Cutter based on your current client demand.</p>
              <button className="bg-slate-950 text-white px-6 py-3 rounded-xl font-bold text-sm w-full">Learn More</button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-32 h-32" />
            </div>
          </div>
        </div>
      </div>

      {showReportForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-xl rounded-[40px] overflow-hidden relative shadow-2xl">
            <div className="bg-slate-800 p-8 flex items-center justify-between">
              <h3 className="text-2xl font-black">Submit Revenue Report</h3>
              <button onClick={() => setShowReportForm(false)} className="text-slate-500 hover:text-white transition">
                <Info className="w-6 h-6 rotate-45" /> {/* Close button hack */}
              </button>
            </div>
            <div className="p-8 md:p-10 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 text-left">Gross Revenue (₹)</label>
                  <input type="number" placeholder="0.00" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 font-bold text-slate-100" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 text-left">Op. Expenses (₹)</label>
                  <input type="number" placeholder="0.00" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 font-bold text-slate-100" />
                </div>
              </div>
              <div className="border-2 border-dashed border-slate-800 rounded-3xl p-10 flex flex-col items-center justify-center text-center group hover:border-amber-400 transition-all">
                <Upload className="w-8 h-8 text-slate-500 group-hover:text-amber-400 mb-4" />
                <h4 className="font-bold text-slate-300">Upload Bank Statement</h4>
                <p className="text-xs text-slate-500 mt-2">Required for verification (PDF only)</p>
              </div>
              <div className="bg-emerald-400/10 p-6 rounded-2xl border border-emerald-400/20">
                <div className="flex justify-between items-center font-bold text-emerald-400">
                  <span className="text-sm">Estimated Investor Payout</span>
                  <span className="text-xl tracking-tight">₹0.00</span>
                </div>
              </div>
              <button 
                onClick={() => setShowReportForm(false)}
                className="w-full bg-amber-400 text-slate-950 py-5 rounded-2xl font-black text-xl hover:bg-amber-500 transition-all shadow-xl shadow-amber-400/20"
              >
                Verify & Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-12">
        <Disclaimer className="text-center" />
      </div>
    </div>
  );
}

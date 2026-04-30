import { 
  Users, Building2, TrendingUp, ShieldAlert, 
  CheckCircle2, XCircle, Search, Filter,
  ArrowRight, Mail, Landmark, FileText, BrainCircuit
} from "lucide-react";
import { cn } from "../lib/utils";

export default function Admin() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-400/10 border border-red-400/20 text-red-400 text-[10px] font-bold uppercase tracking-widest mb-4">
            Internal Access Only
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Platform Control Center</h1>
        </div>
        <div className="flex gap-4">
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-4">
            <div className="w-10 h-10 bg-amber-400/10 rounded-xl flex items-center justify-center text-amber-400">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Alerts</p>
              <p className="text-sm font-bold text-red-400">2 New KYCs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-1 space-y-4">
          {[
            { label: "Deal Requests", count: 4, icon: Building2, active: true },
            { label: "KYC Pending", count: 12, icon: Users, active: false },
            { label: "Revenue Reports", count: 2, icon: TrendingUp, active: false },
            { label: "Waitlist", count: 228, icon: Mail, active: false },
          ].map((item, i) => (
            <button 
              key={i}
              className={cn(
                "w-full flex items-center justify-between p-6 rounded-3xl border transition-all text-left",
                item.active 
                  ? "bg-slate-900 border-amber-400/30 text-slate-100" 
                  : "bg-slate-950 border-slate-800 text-slate-500 hover:bg-slate-900"
              )}
            >
              <div className="flex items-center gap-4">
                <item.icon className={cn("w-6 h-6", item.active ? "text-amber-400" : "text-slate-700")} />
                <span className="font-bold">{item.label}</span>
              </div>
              <span className={cn(
                "px-2 py-0.5 rounded-lg text-xs font-black",
                item.active ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-slate-400"
              )}>{item.count}</span>
            </button>
          ))}
        </div>

        <div className="lg:col-span-3">
          <div className="bg-slate-900 rounded-[40px] border border-slate-800 overflow-hidden">
            <div className="p-8 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-xl font-bold">Deal Approval Queue</h3>
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input type="text" placeholder="Search..." className="bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs font-medium focus:outline-none" />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-950/50">
                    <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Business / Machine</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Amount</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">AI Risk</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Timeline</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-8 py-6">
                      <p className="font-bold text-slate-100 italic">"Masala Grinding Machine"</p>
                      <p className="text-xs text-slate-500 font-medium">Shree Krishna Spices, Nagpur</p>
                    </td>
                    <td className="px-8 py-6 text-right font-bold text-slate-300">₹4,50,000</td>
                    <td className="px-8 py-6 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-sm font-black text-amber-400">72/100</span>
                        <div className="w-12 h-1 bg-slate-950 rounded-full overflow-hidden mt-1">
                          <div className="h-full bg-amber-400 w-[72%]"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-xs text-slate-500 font-medium">
                      Submitted: 2026-04-28<br />
                      Due: 24h
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex gap-2">
                        <button className="p-2 bg-emerald-400/10 text-emerald-400 rounded-xl border border-emerald-400/20 hover:bg-emerald-400 hover:text-white transition-all">
                          <CheckCircle2 className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-red-400/10 text-red-400 rounded-xl border border-red-400/20 hover:bg-red-400 hover:text-white transition-all">
                          <XCircle className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-400 hover:text-white">
                          <FileText className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-[40px] p-8 border border-slate-800">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
            <BrainCircuit className="w-6 h-6 text-amber-400" />
            AI Compliance Oversight
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-slate-950 rounded-2xl border-l-4 border-l-red-500">
              < ShieldAlert className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-slate-200">Anti-Fraud Alert</h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Multiple accounts (User ID: #U312, #U441) detected with identical GST numbers. Investigation required.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-950 rounded-2xl border-l-4 border-l-emerald-500">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-slate-200">Audit Check Clear</h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Monthly reconciliation for 28 operational deals completed. Variance: 0.02%.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[40px] p-8 border border-slate-800">
          <h3 className="text-xl font-bold mb-8">Platform Health</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 text-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">API Reliability</p>
              <p className="text-2xl font-black text-emerald-400">99.9%</p>
            </div>
            <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 text-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Waitlist Conv.</p>
              <p className="text-2xl font-black text-amber-400">12.4%</p>
            </div>
          </div>
          <button className="w-full mt-6 py-4 bg-slate-800 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-slate-700 transition">
            Export Platform Audit Log
          </button>
        </div>
      </div>
    </div>
  );
}

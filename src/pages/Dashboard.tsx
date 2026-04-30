import { 
  TrendingUp, Wallet, ShieldCheck, ArrowUpRight, 
  ArrowDownRight, Calendar, Bell, ChevronRight, 
  ExternalLink, Info, BrainCircuit
} from "lucide-react";
import { cn } from "../lib/utils";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line 
} from "recharts";
import Disclaimer from "../components/Disclaimer";

const PORTFOLIO_DATA = [
  { name: "Manufacturing", value: 65, color: "#f59e0b" },
  { name: "Food Processing", value: 25, color: "#10b981" },
  { name: "Textile", value: 10, color: "#3b82f6" },
];

const RETURNS_DATA = [
  { month: "Jan", amount: 12400 },
  { month: "Feb", amount: 15600 },
  { month: "Mar", amount: 14200 },
  { month: "Apr", amount: 18900 },
  { month: "May", amount: 21200 },
  { month: "Jun", amount: 19800 },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Investor Dashboard</h1>
          <p className="text-slate-400">Welcome back! Your portfolio is performing within target range.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-amber-400/10 rounded-xl flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">KYC Status</p>
              <p className="text-sm font-bold text-emerald-400">Verified</p>
            </div>
          </div>
          <button className="bg-amber-400 text-slate-950 px-6 py-4 rounded-2xl font-bold hover:bg-amber-500 transition-all shadow-lg active:scale-95">
            Add Funds
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: "Total Invested", val: "₹12,40,000", change: "+12%", up: true, icon: Wallet },
          { label: "Active Deals", val: "8", change: "Deals", up: true, icon: Calendar },
          { label: "Total Returned", val: "₹1,84,200", change: "+8.4%", up: true, icon: TrendingUp },
          { label: "Portfolio Yield", val: "16.4%", change: "Annual", up: true, icon: BrainCircuit },
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900 rounded-[32px] p-6 border border-slate-800 relative overflow-hidden group">
            <stat.icon className="absolute -right-2 -bottom-2 w-20 h-20 text-slate-800/50 group-hover:scale-110 transition-transform" />
            <div className="relative z-10">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">{stat.label}</p>
              <h3 className="text-3xl font-black text-slate-100 mb-2">{stat.val}</h3>
              <div className={cn(
                "flex items-center gap-1 text-xs font-bold",
                stat.up ? "text-emerald-400" : "text-red-400"
              )}>
                {stat.up ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 bg-slate-900 rounded-[40px] p-8 border border-slate-800">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-amber-400" />
              Monthly Returns (₹)
            </h3>
            <select className="bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-400 px-3 py-1.5 focus:outline-none">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={RETURNS_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: '#1e293b' }}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }}
                />
                <Bar dataKey="amount" fill="#f59e0b" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[40px] p-8 border border-slate-800">
          <h3 className="text-xl font-bold mb-10 flex items-center gap-3">
            <Info className="w-5 h-5 text-amber-400" />
            Asset Allocation
          </h3>
          <div className="h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={PORTFOLIO_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {PORTFOLIO_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-black text-slate-100">8</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Deals</span>
            </div>
          </div>
          <div className="space-y-4 mt-8">
            {PORTFOLIO_DATA.map((p) => (
              <div key={p.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }}></div>
                  <span className="text-sm font-medium text-slate-400">{p.name}</span>
                </div>
                <span className="text-sm font-bold text-slate-100 text-right">{p.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-[40px] border border-slate-800 overflow-hidden">
        <div className="p-8 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-xl font-bold">My Investments</h3>
          <button className="text-amber-400 font-bold text-sm flex items-center gap-1 hover:underline">
            View All
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-950/50">
                <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Deal Name</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Invested</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Yield</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: "Precision CNC Nashik", amount: "₹1,50,000", yield: "18.2%", status: "Operational", color: "text-emerald-400" },
                { name: "Sugar Mill Processing", amount: "₹5,00,000", yield: "14.5%", status: "Deployed", color: "text-blue-400" },
                { name: "Textile Printing Surat", amount: "₹75,000", yield: "22.1%", status: "Operational", color: "text-emerald-400" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-8 py-6 font-bold text-slate-100">{row.name}</td>
                  <td className="px-8 py-6 font-bold text-slate-300 text-right">{row.amount}</td>
                  <td className="px-8 py-6 font-bold text-amber-400 text-right">{row.yield}</td>
                  <td className="px-8 py-6">
                    <span className={cn("text-xs font-bold uppercase tracking-wider px-2 py-1 bg-slate-950 rounded border border-slate-800", row.color)}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <button className="p-2 border border-slate-700 rounded-lg text-slate-400 hover:text-amber-400 hover:border-amber-400/50 transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12">
        <Disclaimer className="text-center" />
      </div>
    </div>
  );
}

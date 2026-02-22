"use client";
import React from 'react';
import { 
  AreaChart, Area, ResponsiveContainer, Tooltip, 
  PieChart, Pie, Cell, XAxis 
} from 'recharts';
import { 
  Zap, ShoppingCart, Package, Users, ArrowUpRight, 
  Search, Bell, Plus, Globe, Activity, LayoutDashboard, 
  Smartphone, MessageSquare, MoreVertical, Filter, TrendingUp,
  MapPin, ShoppingBag, MousePointer2, ExternalLink
} from 'lucide-react';

// --- DATA MOCKS ---
const chartData = [
  { n: 'Mon', v: 4000 }, { n: 'Tue', v: 7500 }, { n: 'Wed', v: 5200 }, 
  { n: 'Thu', v: 10500 }, { n: 'Fri', v: 8900 }, { n: 'Sat', v: 14000 }, { n: 'Sun', v: 12100 }
];

const trafficData = [
  { name: 'Direct/Web', value: 45, color: '#6366f1' },
  { name: 'WhatsApp', value: 30, color: '#10b981' },
  { name: 'Messenger', value: 25, color: '#0ea5e9' },
];

const velocityItems = [
  { name: "Chanel Perfume", price: "14,500", sales: 842, stock: 12, growth: "+12%", status: 'High' },
  { name: "Gucci Perfume", price: "24,500", sales: 612, stock: 45, growth: "+24%", status: 'Stable' },
  { name: "Reef 19", price: "5000", sales: 142, stock: 4, growth: "+8%", status: 'Critical' },
];

const districtPulse = [
  { city: 'Dhaka', sales: '84,420', pct: 85, color: '#6366f1' },
  { city: 'Chittagong', sales: '31,120', pct: 45, color: '#10b981' },
  { city: 'Sylhet', sales: '12,205', pct: 25, color: '#f59e0b' },
  { city: 'Rajshahi', sales: '9,420', pct: 15, color: '#ec4899' },
];

export default function ScorpioDashboard() {
  return (
    <div className="flex min-h-screen p-4 lg:p-6 gap-6 bg-[#08080A] text-zinc-400 font-sans selection:bg-indigo-500/30">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-20 lg:w-72 bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[2.5rem] flex flex-col p-6 sticky top-6 h-[calc(100vh-3rem)] shrink-0 transition-all">
        <div className="flex items-center gap-4 mb-14 px-2">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/30 shrink-0">
            <Zap className="text-white fill-current" size={24} />
          </div>
          <div className="hidden lg:block">
            <h2 className="text-white font-black tracking-tighter text-xl leading-none">SCORPIO</h2>
            <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mt-1">Dynasty_OS</p>
          </div>
        </div>

        <nav className="flex-1 space-y-3">
          {[
            { icon: LayoutDashboard, label: 'Dashboard', active: true },
            { icon: ShoppingCart, label: 'Order', count: '14' },
            { icon: Package, label: 'Products' },
            { icon: Users, label: 'Users' },
            { icon: Activity, label: 'Settings' },
          ].map((item, i) => (
            <button key={i} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${
              item.active ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' : 'hover:bg-white/5 hover:text-white'
            }`}>
              <div className="flex items-center gap-4">
                <item.icon size={22} strokeWidth={item.active ? 2.5 : 2} />
                <span className="hidden lg:block text-sm font-bold uppercase tracking-tight">{item.label}</span>
              </div>
              {item.count && <span className="hidden lg:block bg-white/10 px-2 py-0.5 rounded-lg text-[10px] font-black">{item.count}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col gap-6 max-w-[1600px] mx-auto w-full">
        
        {/* TOP HUD */}
        <header className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-white font-black text-3xl tracking-tighter italic uppercase">Market_Control_V2</h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <p className="text-[10px] font-bold text-zinc-500 tracking-[0.3em] uppercase">Session_Live / Currency: BDT</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group hidden xl:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-hover:text-indigo-400 transition-colors" size={18} />
              <input type="text" placeholder="Global system search..." className="bg-white/5 border border-white/5 rounded-2xl py-3.5 pl-12 pr-6 text-xs w-80 focus:border-indigo-500/50 outline-none text-white transition-all shadow-inner" />
            </div>
            <button className="bg-white text-black px-7 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
              <Plus size={16} strokeWidth={4} /> Add Product
            </button>
          </div>
        </header>

        {/* REVENUE  */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 bg-white/[0.02] border border-white/5 rounded-[3.5rem] p-10 relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full group-hover:bg-indigo-600/20 transition-all duration-1000" />
            
            <div className="flex justify-between items-start relative z-10 mb-12">
              <div>
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-2">Aggregate_Revenue</p>
                <h2 className="text-7xl font-black text-white tracking-tighter">1,24,500 <span className="text-2xl font-medium opacity-20 italic ml-2">TK</span></h2>
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-emerald-400 font-bold text-sm bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
                    <ArrowUpRight size={14} /> +34.2% Growth
                  </span>
                  <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest">Net Profit: 12,400 TK</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-3 bg-white/5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-all"><Filter size={18}/></button>
                <button className="p-3 bg-white/5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-all"><MoreVertical size={18}/></button>
              </div>
            </div>

            <div className="h-64 w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="neonArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{backgroundColor: '#050508', border: '1px solid #ffffff10', borderRadius: '16px', fontSize: '12px'}} 
                    itemStyle={{color: '#fff'}}
                  />
                  <Area type="monotone" dataKey="v" stroke="#6366f1" strokeWidth={6} fill="url(#neonArea)" animationDuration={2000} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <div className="bg-[#0A0A0F] rounded-[3.5rem] p-8 border border-white/5 flex-1 relative overflow-hidden group">
              <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Traffic_Source</h3>
              <div className="h-48 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={trafficData} innerRadius={60} outerRadius={80} paddingAngle={8} dataKey="value">
                      {trafficData.map((e, i) => <Cell key={i} fill={e.color} stroke="none" />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-3xl font-black text-white italic">84%</span>
                  <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-tighter">Conversion</span>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                {trafficData.map((t, i) => (
                  <div key={i} className="flex justify-between items-center group/item cursor-default">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: t.color}} />
                      <span className="text-[10px] font-black uppercase text-zinc-500 group-hover/item:text-white transition-colors">{t.name}</span>
                    </div>
                    <span className="text-xs font-bold text-white tracking-tighter">{t.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* OPERATIONAL METRICS */}
        <div className="grid grid-cols-4 gap-6">
          {[
            { label: 'Total Orders', val: '842', icon: ShoppingCart, color: 'text-indigo-400', pct: '+12%' },
            { label: 'In Shipment', val: '24', icon: Globe, color: 'text-sky-400', pct: 'On Time' },
            { label: 'Active Users', val: '1,102', icon: Users, color: 'text-emerald-400', pct: 'Live' },
            { label: 'Stock Value', val: '4.2M', icon: Package, color: 'text-amber-400', pct: 'Secured' },
          ].map((m, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-[2.5rem] flex items-center gap-5 hover:bg-white/[0.04] transition-all cursor-pointer group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <m.icon className={m.color} size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-black text-white tracking-tighter">{m.val}</p>
                  <span className="text-[8px] font-black text-zinc-600 bg-white/5 px-1.5 rounded uppercase">{m.pct}</span>
                </div>
                <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">{m.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* INVENTORY  */}
        <div className="grid grid-cols-12 gap-6 pb-6">
          
          {/* TOP SELLING INVENTORY */}
          <div className="col-span-12 lg:col-span-8 bg-white/[0.02] border border-white/5 rounded-[3rem] p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400"><ShoppingBag size={20}/></div>
                <h3 className="text-white font-black text-sm uppercase tracking-widest leading-none">Inventory</h3>
              </div>
              <button className="text-[10px] font-black text-zinc-500 hover:text-white uppercase tracking-widest flex items-center gap-2 transition-all">
                Export Full Report <ExternalLink size={12}/>
              </button>
            </div>
            
            <div className="space-y-3">
              {velocityItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group/row">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center font-black text-indigo-500 border border-white/5 group-hover/row:border-indigo-500/30 transition-all">{item.name[0]}</div>
                    <div>
                      <p className="text-xs font-black text-white uppercase tracking-tight">{item.name}</p>
                      <p className="text-[10px] font-bold text-zinc-600 uppercase">{item.price} TK</p>
                    </div>
                  </div>
                  <div className="hidden sm:block text-center px-4">
                    <p className="text-xs font-black text-white">{item.sales}</p>
                    <p className="text-[9px] font-bold text-zinc-600 uppercase">Total Sales</p>
                  </div>
                  <div className="w-40 hidden md:block">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[9px] font-black text-zinc-500 uppercase tracking-tighter">Availability</span>
                      <span className={`text-[9px] font-black uppercase ${item.stock < 10 ? 'text-rose-500' : 'text-emerald-500'}`}>
                        {item.stock} in stock
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full transition-all duration-1000 ${item.stock < 10 ? 'bg-rose-500' : 'bg-indigo-500'}`} style={{width: `${(item.stock/50)*100}%`}} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-[10px] bg-emerald-500/10 px-3 py-1.5 rounded-xl">
                    <TrendingUp size={12}/> {item.growth}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GEOGRAPHIC HEAT-LIST */}
          <div className="col-span-12 lg:col-span-4 bg-white/[0.02] border border-white/5 rounded-[3rem] p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-white font-black text-xs uppercase tracking-[0.3em]">District_Pulse</h3>
              <MapPin size={16} className="text-zinc-600" />
            </div>
            <div className="space-y-7">
              {districtPulse.map((loc, i) => (
                <div key={i} className="group cursor-default">
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest group-hover:text-white transition-colors">{loc.city}</span>
                    <span className="text-xs font-black text-white">{loc.sales} TK</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full transition-all duration-1000 group-hover:opacity-80" style={{width: `${loc.pct}%`, backgroundColor: loc.color}} />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-indigo-600/10 rounded-[2rem] border border-indigo-500/20 relative overflow-hidden group/live">
               <div className="absolute -right-2 -bottom-2 text-indigo-500/10 group-hover/live:scale-110 transition-transform">
                 <MousePointer2 size={80} />
               </div>
               <div className="relative z-10">
                 <div className="flex items-center gap-2 mb-2">
                   <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                   <span className="text-[10px] font-black text-white uppercase tracking-widest">Active_Buyers</span>
                 </div>
                 <p className="text-4xl font-black text-white tracking-tighter">842</p>
                 <p className="text-[9px] font-bold text-zinc-500 uppercase mt-2 italic leading-relaxed">Current users viewing your landing pages across all channels.</p>
               </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
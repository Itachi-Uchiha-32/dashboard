"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { 
  AreaChart, Area, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { 
  Zap, ShoppingCart, Package, Users, ArrowUpRight, 
  Plus, Globe, Activity, LayoutDashboard, 
  Filter, ShoppingBag, Sun, Moon, Target, ChevronDown, ChevronUp,
  MapPin
} from 'lucide-react';

// DATA MOCKS ---
const districtPulse = [
  { city: 'Dhaka', sales: '84,420', pct: 85, color: '#6366f1', lat: 23.8103, lng: 90.4125 },
  { city: 'Chittagong', sales: '31,120', pct: 45, color: '#10b981', lat: 22.3569, lng: 91.7832 },
  { city: 'Sylhet', sales: '12,205', pct: 25, color: '#f59e0b', lat: 24.8949, lng: 91.8687 },
  { city: 'Rajshahi', sales: '9,420', pct: 15, color: '#ec4899', lat: 24.3745, lng: 88.6042 },
  { city: 'Khulna', sales: '8,150', pct: 12, color: '#0ea5e9', lat: 22.8456, lng: 89.5403 },
  { city: 'Barisal', sales: '6,400', pct: 10, color: '#8b5cf6', lat: 22.7010, lng: 90.3535 },
  { city: 'Rangpur', sales: '5,900', pct: 9, color: '#f43f5e', lat: 25.7439, lng: 89.2752 },
  { city: 'Mymensingh', sales: '7,200', pct: 11, color: '#14b8a6', lat: 24.7471, lng: 90.4203 },
  { city: 'Comilla', sales: '4,500', pct: 8, color: '#6366f1', lat: 23.4607, lng: 91.1809 },
  { city: 'Narayanganj', sales: '15,300', pct: 30, color: '#10b981', lat: 23.6238, lng: 90.5000 },
  { city: 'Gazipur', sales: '12,100', pct: 22, color: '#f59e0b', lat: 24.0023, lng: 90.4264 },
  { city: 'Bogura', sales: '6,800', pct: 14, color: '#ec4899', lat: 24.8481, lng: 89.3730 },
  { city: "Cox's Bazar", sales: '9,100', pct: 18, color: '#0ea5e9', lat: 21.4272, lng: 92.0058 },
  { city: 'Jessore', sales: '5,200', pct: 10, color: '#8b5cf6', lat: 23.1664, lng: 89.2081 },
  
].sort((a, b) => parseInt(b.sales.replace(',','')) - parseInt(a.sales.replace(',','')));

const chartData = [
  { n: '1', v: 3000 }, { n: '2', v: 5500 }, { n: '3', v: 4200 }, 
  { n: '4', v: 8500 }, { n: '5', v: 6900 }, { n: '6', v: 11000 }, { n: '7', v: 9100 }
];

const trafficData = [
  { name: 'Direct/Web', value: 45, color: '#6366f1' },
  { name: 'WhatsApp', value: 30, color: '#10b981' },
  { name: 'Messenger', value: 25, color: '#0ea5e9' },
];

const velocityItems = [
  { name: "Chanel Perfume", price: "14,500", growth: "+12%" },
  { name: "Gucci Perfume", price: "24,500", growth: "+24%" },
  { name: "Reef 19", price: "5000", growth: "+8%" },
];

const InteractiveMap = dynamic(() => import('./MapComponent'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-zinc-800 animate-pulse rounded-3xl" />
});

export default function ScorpioDashboard() {
  const [isDark, setIsDark] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    isDark ? root.classList.add('dark') : root.classList.remove('dark');
  }, [isDark]);

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: ShoppingCart, label: 'Order' },
    { icon: Package, label: 'Products' },
    { icon: Users, label: 'Users' },
    { icon: Activity, label: 'Settings' },
  ];

  const displayedDistricts = isExpanded ? districtPulse : districtPulse.slice(0, 4);

  return (
    <div className={`flex flex-col lg:flex-row min-h-screen transition-colors duration-500 font-sans ${
      isDark ? 'bg-[#08080A] text-zinc-400' : 'bg-[#F8FAFC] text-zinc-600'
    }`}>
      
      {/* DESKTOP SIDEBAR */}
      <aside className={`hidden lg:flex w-72 border-r flex-col p-6 sticky top-0 h-screen z-50 ${
        isDark ? 'bg-white/[0.02] backdrop-blur-3xl border-white/5' : 'bg-white border-zinc-200 shadow-xl'
      }`}>
        <div className="flex items-center gap-4 mb-14 px-2">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/30">
            <Zap className="text-white fill-current" size={24} />
          </div>
          <div>
            <h2 className={`font-black tracking-tighter text-xl leading-none ${isDark ? 'text-white' : 'text-zinc-900'}`}>SCORPIO</h2>
            <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mt-1">Dynasty_OS</p>
          </div>
        </div>
        <nav className="flex-1 space-y-3">
          {navItems.map((item, i) => (
            <button key={i} className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${
              item.active ? 'bg-indigo-600 text-white' : isDark ? 'hover:bg-white/5' : 'hover:bg-zinc-100'
            }`}>
              <item.icon size={22} />
              <span className="text-sm font-bold uppercase tracking-tight">{item.label}</span>
            </button>
          ))}
        </nav>
        <button onClick={() => setIsDark(!isDark)} className={`mt-auto p-4 rounded-2xl flex items-center gap-4 ${isDark ? 'bg-white/5 text-amber-400' : 'bg-zinc-100 text-zinc-900'}`}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
          <span className="text-xs font-black uppercase tracking-widest">{isDark ? 'Light' : 'Dark'}</span>
        </button>
      </aside>

      {/* MOBILE FLOATING NAV */}
      <nav className={`lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md h-16 backdrop-blur-2xl border rounded-full z-[100] flex items-center justify-around px-4 shadow-2xl ${
        isDark ? 'bg-black/80 border-white/10' : 'bg-white/90 border-zinc-200'
      }`}>
        {navItems.map((item, i) => (
          <button key={i} className={`p-2 rounded-xl ${item.active ? 'text-indigo-500 bg-indigo-500/10' : 'text-zinc-500'}`}>
            <item.icon size={20} />
          </button>
        ))}
        <button onClick={() => setIsDark(!isDark)} className="p-2">
          {isDark ? <Sun size={20} className="text-amber-500"/> : <Moon size={20} className="text-indigo-600"/>}
        </button>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 lg:p-8 flex flex-col gap-6 w-full max-w-[1600px] mx-auto overflow-hidden">
        <header className="flex items-center justify-between">
          <div>
            <h1 className={`font-black text-2xl lg:text-3xl tracking-tighter italic uppercase ${isDark ? 'text-white' : 'text-zinc-900'}`}>Control_Room</h1>
            <p className="text-[10px] font-bold text-zinc-500 tracking-[0.3em] uppercase mt-1">BD_REGION_LOCK: 64_DISTRICTS</p>
          </div>
          <button className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2 ${isDark ? 'bg-white text-black' : 'bg-zinc-900 text-white'}`}>
            <Plus size={14} strokeWidth={4} /> Add Data
          </button>
        </header>

        {/* METRICS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Sales', val: '4.2M', icon: Globe, trend: '+12.5%', color: 'text-indigo-500' },
            { label: 'Orders', val: '12,840', icon: ShoppingBag, trend: '+8.2%', color: 'text-emerald-500' },
            { label: 'Conversion', val: '3.2%', icon: Target, trend: '+2.4%', color: 'text-amber-500' },
            { label: 'Active Sessions', val: '842', icon: Activity, trend: '+18.1%', color: 'text-rose-500' },
          ].map((m, i) => (
            <div key={i} className={`p-5 rounded-[2rem] border ${
              isDark ? 'bg-white/[0.03] border-white/5' : 'bg-white border-zinc-200 shadow-sm'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isDark ? 'bg-white/5' : 'bg-zinc-100'} ${m.color}`}>
                  <m.icon size={16} />
                </div>
                <span className="text-[8px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">{m.trend}</span>
              </div>
              <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-500">{m.label}</p>
              <h4 className={`text-xl font-black ${isDark ? 'text-white' : 'text-zinc-900'}`}>{m.val}</h4>
            </div>
          ))}
        </div>

        {/* REVENUE & TRAFFIC SECTION */}
        <div className="grid grid-cols-12 gap-6">
          {/* UPDATED REVENUE DESIGN */}
          <div className={`col-span-12 lg:col-span-8 border rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between min-h-[400px] ${
            isDark ? 'bg-white/[0.02] border-white/5' : 'bg-white border-zinc-200'
          }`}>
             <div>
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.4em]">Aggregate_Revenue</p>
                  <Filter size={18} className="text-zinc-500 cursor-pointer" />
                </div>
                
                <div className="flex items-baseline gap-2 mb-1">
                  <h2 className={`text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>1,24,500</h2>
                  <span className="text-xl font-bold italic text-zinc-500">TK</span>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full w-fit uppercase">
                  <ArrowUpRight size={12} strokeWidth={3} /> +34.2% Growth
                </div>
             </div>

             <div className="h-44 w-full absolute bottom-0 left-0 right-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="v" stroke="#6366f1" strokeWidth={4} fill="url(#revGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          {/* TRAFFIC  */}
          <div className={`col-span-12 lg:col-span-4 rounded-[2.5rem] p-8 border ${
            isDark ? 'bg-[#0A0A0F] border-white/5' : 'bg-white border-zinc-200'
          }`}>
            <h3 className="font-black text-[10px] uppercase tracking-[0.3em] mb-8">Traffic_Origin</h3>
            <div className="h-40 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={trafficData} innerRadius={55} outerRadius={70} paddingAngle={8} dataKey="value">
                    {trafficData.map((e, i) => <Cell key={i} fill={e.color} stroke="none" />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-black italic">84%</div>
            </div>
            <div className="space-y-3 mt-6">
              {trafficData.map((t, i) => (
                <div key={i} className="flex justify-between items-center text-[9px] font-black uppercase">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: t.color }} />
                    <span className="text-zinc-500">{t.name}</span>
                  </div>
                  <span className={isDark ? 'text-white' : 'text-zinc-900'}>{t.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MAP & DISTRICT PULSE */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"> 
  {/* MAP CONTAINER */}
  <div className={`lg:col-span-7 h-[500px] lg:h-[650px] sticky top-6 rounded-[3rem] border overflow-hidden relative ${
    isDark ? 'bg-white/[0.02] border-white/5' : 'bg-white border-zinc-200'
  }`}>
     <InteractiveMap isDark={isDark} data={districtPulse} />
  </div>

  {/* DISTRICT PULSE CARD LIST */}
  <div className="lg:col-span-5 flex flex-col h-fit"> {/* Changed to h-fit */}
     <div className="flex items-center justify-between mb-6 px-2">
        <div>
          <h3 className={`font-black text-sm uppercase tracking-[0.3em] ${isDark ? 'text-white' : 'text-zinc-900'}`}>District_Pulse</h3>
          <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">Live Market Performance</p>
        </div>
        <div className={`p-2 rounded-xl ${isDark ? 'bg-white/5 text-white' : 'bg-zinc-100 text-zinc-900'}`}>
          <Target size={18} />
        </div>
     </div>
     
     {/* WRAPPER FOR EXPANSION ANIMATION */}
     
     <div className={`space-y-4 transition-all duration-1000 ease-in-out overflow-hidden ${
       isExpanded ? 'max-h-[2400px] opacity-100' : 'max-h-[520px] opacity-100'
     }`}>
       {displayedDistricts.map((d, i) => (
         <div 
           key={i} 
           className={`p-5 rounded-[2rem] border transition-all duration-300 cursor-pointer group relative overflow-hidden
             ${isDark 
               ? 'bg-white/[0.03] border-white/5 hover:bg-white/[0.07] hover:border-indigo-500/50 hover:-translate-y-1' 
               : 'bg-white border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300'
             }`}
         >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:rotate-12 ${
                    isDark ? 'bg-zinc-900 border-white/10' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    <MapPin size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <span className={`text-xs font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                      {d.city}
                    </span>
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-tighter mt-0.5">Region_Lock: Active</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-black ${isDark ? 'text-white' : 'text-zinc-900'}`}>{d.sales}</span>
                  <span className="text-[10px] font-bold text-zinc-500 ml-1">TK</span>
                </div>
              </div>

              
              <div className="space-y-1.5">
                <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-zinc-500">
                  <span>Market Share</span>
                  <span className="text-indigo-500">{d.pct}%</span>
                </div>
                <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDark ? 'bg-white/5' : 'bg-zinc-100'}`}>
                   <div 
                     className="h-full rounded-full transition-all duration-1000 ease-out" 
                     style={{ 
                       width: `${d.pct}%`, 
                       backgroundColor: d.color,
                       boxShadow: `0 0 15px ${d.color}40` 
                     }} 
                   />
                </div>
              </div>
            </div>
         </div>
       ))}
     </div>

     {/* EXPAND/COLLAPSE BUTTON */}
     <button 
       onClick={() => setIsExpanded(!isExpanded)}
       className={`w-full mt-6 py-5 rounded-[2rem] border-2 border-dashed flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 mb-10
         ${isDark 
           ? 'border-white/10 text-zinc-500 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/5' 
           : 'border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-indigo-300 hover:bg-zinc-50'
         }`}
     >
       {isExpanded ? (
         <><ChevronUp size={16} strokeWidth={3} /> Collapse Units</>
       ) : (
         <><ChevronDown size={16} strokeWidth={3} /> Expand 14 Districts</>
       )}
     </button>
  </div>
</div>

        {/* INVENTORY */}
        <div className={`p-8 rounded-[2.5rem] border mb-24 lg:mb-10 ${
          isDark ? 'bg-white/[0.02] border-white/5' : 'bg-white border-zinc-200'
        }`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-500"><ShoppingBag size={18}/></div>
              <h3 className="font-black text-xs uppercase tracking-widest">Inventory</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {velocityItems.map((item, i) => (
                <div key={i} className={`flex items-center justify-between p-5 rounded-3xl border transition-all ${
                  isDark ? 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]' : 'bg-zinc-50 border-zinc-200 shadow-sm'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-600/10 rounded-2xl flex items-center justify-center font-black text-indigo-500 border border-indigo-500/10">{item.name[0]}</div>
                    <div>
                      <p className={`text-[10px] font-black uppercase tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>{item.name}</p>
                      <p className="text-[9px] font-bold text-zinc-500 uppercase">{item.price} TK</p>
                    </div>
                  </div>
                  <div className="text-emerald-500 font-black text-[9px] bg-emerald-500/10 px-3 py-1.5 rounded-xl flex items-center gap-1">
                    <ArrowUpRight size={10}/> {item.growth}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </main>
    </div>
  );
}
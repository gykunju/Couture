import { TrendingUp, TrendingDown, ShoppingBag, Users } from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const chartData = [
    { name: 'M', value: 4000 },
    { name: 'T', value: 3000 },
    { name: 'W', value: 6000 },
    { name: 'T', value: 4500 },
    { name: 'F', value: 8000 },
    { name: 'S', value: 5000 },
    { name: 'S', value: 7500 },
  ];

  return (
    <div className="pb-8">
      <header className="mb-6 text-center">
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-bg border border-border rounded-3xl p-5">
          <div className="text-text-muted text-sm mb-2">Total Sales</div>
          <div className="text-2xl font-bold text-primary mb-2">$12,450</div>
          <div className="text-success text-xs font-semibold flex items-center gap-1">
            <TrendingUp size={14} /> +15%
          </div>
        </div>
        <div className="bg-bg border border-border rounded-3xl p-5">
          <div className="text-text-muted text-sm mb-2">Items Sold</div>
          <div className="text-2xl font-bold text-primary mb-2">342</div>
          <div className="text-success text-xs font-semibold flex items-center gap-1">
            <TrendingUp size={14} /> +5%
          </div>
        </div>
      </div>

      {/* Inventory Card */}
      <div className="bg-bg border border-border rounded-3xl p-5 mb-6">
        <div className="text-text-muted text-sm mb-2">Inventory</div>
        <div className="text-2xl font-bold text-primary mb-2">1,024</div>
        <div className="text-danger text-xs font-semibold flex items-center gap-1">
          <TrendingDown size={14} /> -2%
        </div>
      </div>

      {/* Chart Card */}
      <div className="bg-white/75 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-sm mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-text-main text-base font-medium">Weekly Sales Trend</div>
            <div className="text-2xl font-bold text-primary">$12,450</div>
          </div>
          <div className="text-success text-xs font-semibold">This Week +15%</div>
        </div>
        
        <div className="h-[200px] w-full -ml-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9d4edd" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#9d4edd" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 8px 30px rgba(157,78,221,0.08)' }}
                labelStyle={{ display: 'none' }}
                itemStyle={{ color: '#9d4edd', fontWeight: 600 }}
              />
              <Area type="monotone" dataKey="value" stroke="#9d4edd" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#8d99ae' }} dy={10} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        
        <div className="bg-white/75 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-4 py-4 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary">
              <ShoppingBag size={20} />
            </div>
            <div className="flex-1">
              <div className="font-medium">Order #1024</div>
              <div className="text-xs text-text-muted">Custom Crochet Top</div>
            </div>
            <div className="font-semibold text-primary">$45.00</div>
          </div>
          
          <div className="flex items-center gap-4 py-4 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary">
              <ShoppingBag size={20} />
            </div>
            <div className="flex-1">
              <div className="font-medium">Order #1023</div>
              <div className="text-xs text-text-muted">Floral Maxi Dress</div>
            </div>
            <div className="font-semibold text-primary">$89.99</div>
          </div>

          <div className="flex items-center gap-4 py-4">
            <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary">
              <Users size={20} />
            </div>
            <div className="flex-1">
              <div className="font-medium">New Customer</div>
              <div className="text-xs text-text-muted">Sarah Jenkins</div>
            </div>
            <div className="text-xs text-text-muted">Just now</div>
          </div>
        </div>
      </section>

    </div>
  );
}

"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap } from "lucide-react";

interface AnalyticsData {
    name: string;
    value: number;
    color: string;
}

const analyticsData: AnalyticsData[] = [
  { name: 'Marine Fuels', value: 3359, color: '#4f46e5' },
  { name: 'Passenger Cars', value: 2018, color: '#8b5cf6' },
  { name: 'Desktop Computers', value: 1510, color: '#ec4899' },
  { name: 'Silicomanganese', value: 1173, color: '#06b6d4' },
  { name: 'Buses', value: 962, color: '#10b981' },
];

export function MarketIntelligence() {
  return (
    <section className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs uppercase tracking-wider">
                <TrendingUp className="h-3 w-3" />
                Market Intelligence
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Top Procurement Categories in FY 2025-26</h2>
            <p className="text-slate-500 leading-relaxed">
                Based on our analysis of over <strong>$4 Billion+</strong> in transaction volume. 
                These sectors are seeing the highest government spending right now. 
                Position your business to target these high-value opportunities.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
                    <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-none">Marine Fuels</Badge>
                    <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-none">IT Hardware</Badge>
                    <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-none">Automotive</Badge>
            </div>
            </div>
            <div className="w-full md:w-1/2 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analyticsData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                    <XAxis type="number" hide />
                    <YAxis 
                        dataKey="name" 
                        type="category" 
                        width={100} 
                        tick={{fontSize: 11, fill: '#64748b'}} 
                        axisLine={false} 
                        tickLine={false} 
                    />
                    <Tooltip 
                        cursor={{fill: '#f8fafc'}}
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
                        {analyticsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
        <Zap className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
        <p className="text-sm text-slate-600">
            <strong>Pro Tip:</strong> "Passenger Car" and "Desktop Computer" tenders often have low competition in specific districts. Use our search tool to filter by location (coming soon).
        </p>
        </div>
    </section>
  );
}

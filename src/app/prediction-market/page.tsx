"use client";

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { TrendingUp, BarChart2, Target } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function PredictionMarketPage() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans text-white relative">
      <Navbar />
      <BackgroundBeams className="opacity-30" />
      
      <main className="pt-32 pb-20 px-4 md:px-6 container mx-auto max-w-5xl relative z-10">
        <header className="text-center mb-16">
           <Badge variant="outline" className="mb-6 px-4 py-2 border-indigo-400 text-indigo-300 bg-indigo-950/50">
             The Future of Procurement
           </Badge>
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-purple-300">
             GeM Prediction Market
           </h1>
           <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
             We don't just search tenders. We have built a <strong>Prediction Market for Government Contracts</strong>. 
             Our AI models probability, supply, and demand to forecast the exact winning price for any asset.
           </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0">
                        <TrendingUp className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Market Intelligence</h3>
                        <p className="text-slate-400">
                            Traditional bidding is guessing. We turn it into a science. 
                            See the real-time "market price" for laptops, furniture, and services on the GeM portal.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                        <BarChart2 className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Bid Sentiment Analysis</h3>
                        <p className="text-slate-400">
                            Know if a tender is "Hot" (aggressive bidding) or "Cold" (high margins). 
                            Adjust your strategy based on the predicted competition density.
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-[1px] rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-500">
                <div className="bg-slate-950 rounded-3xl p-8 h-full">
                    <h3 className="text-xl font-bold mb-6 text-center">Prediction Accuracy</h3>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>L1 Price Prediction</span>
                                <span className="text-emerald-400">98.4%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 w-[98.4%]"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Competitor Detection</span>
                                <span className="text-indigo-400">94.1%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-[94.1%]"></div>
                            </div>
                        </div>
                         <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Spec Matching</span>
                                <span className="text-purple-400">99.7%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 w-[99.7%]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <Link href="/" className="inline-block px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors">
                            Try the Prediction Engine
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="my-24 bg-indigo-950/30 rounded-3xl overflow-hidden border border-indigo-500/20 grid md:grid-cols-2">
             <div className="p-12 flex flex-col justify-center">
                 <h2 className="text-3xl font-bold mb-6">AI + Human Intelligence</h2>
                 <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    Algorithms crunch the numbers, but your strategy wins the deal. 
                    Our "Strategy Team" view gives you aggregated insights from top legal and procurement experts.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                        <span>Real-time competitor tracking</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <span>Regulatory compliance alerts</span>
                    </li>
                 </ul>
             </div>
             <div className="h-full min-h-[300px] relative">
                 <img src="/assets/team_meeting.png" alt="Strategy Team" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900/50"></div>
             </div>
        </div>

        <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-4">Target Keyword Clusters</h2>
            <div className="flex flex-wrap justify-center gap-3">
                {["Govt Contracts AI", "Tender Prediction Market", "Gem Price Forecast", "Public Procurement Analytics", "L1 Discovery Tool", "Competitor Bidding History"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-800 rounded-full text-slate-300 text-sm border border-slate-700">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}

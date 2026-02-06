"use client";

import { Check, X, Minus } from "lucide-react";

export function CompetitorComparison() {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Why You Are Losing Bids</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Stop guessing. Stop trusting "agents". Start using math.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-6 text-slate-500 font-medium text-sm uppercase tracking-wider">Feature</th>
                <th className="p-6 text-slate-500 font-medium text-sm uppercase tracking-wider text-center">Avg. Consultant</th>
                <th className="p-6 text-slate-500 font-medium text-sm uppercase tracking-wider text-center">Tender Portals (BidAssist etc)</th>
                <th className="p-6 bg-indigo-600 text-white font-bold text-lg uppercase tracking-wider text-center border-t-4 border-indigo-800">
                  GemBid.help
                  <div className="text-[10px] font-normal text-indigo-100 normal-case mt-1">Ai-Powered Data Dealer</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              
              {/* Row 1: L1 Price Prediction */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 font-bold text-lg text-slate-800">L1 Price Prediction</td>
                <td className="p-6 text-center text-slate-500">
                  <div className="flex flex-col items-center gap-1">
                    <X className="h-6 w-6 text-red-500" />
                    <span className="text-xs">Guesswork</span>
                  </div>
                </td>
                <td className="p-6 text-center text-slate-500">
                   <div className="flex flex-col items-center gap-1">
                    <Minus className="h-6 w-6 text-slate-400" />
                    <span className="text-xs">No Data</span>
                  </div>
                </td>
                <td className="p-6 text-center bg-indigo-50 border-x border-indigo-100">
                  <div className="flex flex-col items-center gap-1">
                    <Check className="h-8 w-8 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">98% Accuracy</span>
                  </div>
                </td>
              </tr>

              {/* Row 2: Winning Probability */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 font-bold text-lg text-slate-800">Winning Probability</td>
                <td className="p-6 text-center text-slate-500">
                   <div className="flex flex-col items-center gap-1">
                    <X className="h-6 w-6 text-red-500" />
                    <span className="text-xs">Blind Hope</span>
                  </div>
                </td>
                <td className="p-6 text-center text-slate-500">
                   <div className="flex flex-col items-center gap-1">
                    <Minus className="h-6 w-6 text-slate-400" />
                    <span className="text-xs">Keyword Match Only</span>
                  </div>
                </td>
                <td className="p-6 text-center bg-indigo-50 border-x border-indigo-100">
                   <div className="font-bold text-indigo-900">Algorithm Based</div>
                   <div className="text-xs text-indigo-600">Uses Historical Regression</div>
                </td>
              </tr>

               {/* Row 3: Competitor Intel */}
               <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 font-bold text-lg text-slate-800">Competitor Intel</td>
                <td className="p-6 text-center text-slate-500">
                   <div className="text-sm">Limited (Local Only)</div>
                </td>
                <td className="p-6 text-center text-slate-500">
                   <div className="text-sm">Public List Only</div>
                </td>
                <td className="p-6 text-center bg-indigo-50 border-x border-indigo-100">
                   <div className="font-bold text-indigo-900">Full History</div>
                   <div className="text-xs text-indigo-600">Know their last winning bid</div>
                </td>
              </tr>

              {/* Row 4: Cost */}
               <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6 font-bold text-lg text-slate-800">Cost</td>
                <td className="p-6 text-center text-slate-500">
                   <div className="text-red-500 font-bold">High Commission</div>
                   <div className="text-xs">(1-5% of Tender)</div>
                </td>
                <td className="p-6 text-center text-slate-500">
                   <div className="text-slate-600">₹5,000+</div>
                </td>
                <td className="p-6 text-center bg-indigo-50 border-x border-indigo-100">
                   <div className="text-emerald-600 font-bold text-xl">₹999/mo</div>
                   <div className="text-xs text-indigo-600">Flat Fee. No Commission.</div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-slate-400 italic">
                *Data based on analysis of 10M+ GeM Tenders in 2024-25.
            </p>
        </div>
      </div>
    </section>
  );
}

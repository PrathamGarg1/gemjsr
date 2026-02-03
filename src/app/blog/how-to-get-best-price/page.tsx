"use client";

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Banknote, Target, TrendingDown } from "lucide-react";

export default function BestPriceArticle() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 md:px-6 container mx-auto max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-indigo-600 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
        
        <article className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            <header className="mb-10 text-center">
                <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-0">Guide</Badge>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                    How to Get the Best Price & Win Contracts on GeM (2026)
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    The secret to winning <strong>etnders</strong> isn't just lowering your price. It's about data intelligence.
                </p>
            </header>

            <div className="prose prose-slate prose-lg mx-auto">
                <p>
                    Every day, thousands of <strong>government contracts</strong> are lost because vendors quote blindly. 
                    If you want to know <strong>how to get contracts</strong> consistently, you need to stop guessing and start predicting.
                </p>

                <h3>The "L1" Secret</h3>
                <p>
                    In government tenders (etnders), the L1 (Lowest Bidder) wins. But how low is too low?
                    If you quote ₹100 and the winner quotes ₹99, you lose. If you quote ₹80, you leave money on the table.
                </p>
                <p>
                    To get the <strong>best price</strong>, you need to find the "Sweet Spot"—the highest price that is still lower than your competitors.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <TrendingDown className="h-8 w-8 text-red-500 mb-4" />
                        <h4 className="font-bold text-lg mb-2">The Old Way</h4>
                        <p className="text-sm text-slate-600">Guessing margins, calling friends for rates, and losing bids by small margins.</p>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
                        <Target className="h-8 w-8 text-indigo-600 mb-4" />
                        <h4 className="font-bold text-lg mb-2">The AI Way</h4>
                        <p className="text-sm text-slate-600">Using our <Link href="/" className="text-indigo-600 underline">Prediction Market Tool</Link> to see the exact historic winning price.</p>
                    </div>
                </div>

                <h3>3 Steps to Win More Contracts</h3>
                <ol>
                    <li>
                        <strong>Analyze Past Tenders:</strong> Look for "Run Rate" contracts. 
                        If a department buys Printer Paper every month, check the last 3 winning prices.
                    </li>
                    <li>
                        <strong>Check Competitor Bids:</strong> On GeM, you can see who participated. 
                        Identify the aggressive bidders and undercut them strategically.
                    </li>
                    <li>
                        <strong>Use the "Golden Minute":</strong> In Reverse Auctions, 80% of bids come in the last 10 minutes. 
                        Don't show your hand early.
                    </li>
                </ol>

                <h3>Conclusion</h3>
                <p>
                    Winning <strong>govt contracts</strong> is a numbers game. Use data to tip the odds in your favor.
                </p>
            </div>
        </article>
      </main>
    </div>
  );
}

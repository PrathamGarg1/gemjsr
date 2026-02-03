"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 md:px-6 container mx-auto max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-indigo-600 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
        
        <article className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            <header className="mb-10 text-center">
                <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-0">Strategy</Badge>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                    How to Win GeM Tenders: The Ultimate Guide (2026)
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Stop bidding blindly. Learn the exact L1 price prediction strategy that helps smart vendors win 4x more contracts.
                </p>
            </header>

            <div className="prose prose-slate prose-lg mx-auto">
                <p>
                    Winning a contract on the <strong>Government e-Marketplace (GeM)</strong> isn't just about listing your product. 
                    It's a war for the **L1 (Lowest One)** position. If you serve the government, you know the pain: you quote a price, wait weeks, 
                    and then find out you lost by ₹5.
                </p>

                <h3>The GeM Bidding Problem</h3>
                <p>
                    Most vendors guess their prices. They look at their cost, add a margin, and pray. 
                    But your competitors aren't guessing. The smart ones are using <strong>historical data</strong>.
                    They know exactly what the winning price was for similar tenders in the past.
                </p>

                <h3>Step 1: Analyze Historical L1 Prices</h3>
                <p>
                    To win, you must know the market rate. Not the MRP, but the <em>Government Rate</em>.
                    <Link href="/" className="text-indigo-600 font-semibold mx-1">Use our L1 Prediction Tool</Link> 
                    to scan past contracts for your category. If the last 10 laptops were sold at ₹42,000, quoting ₹45,000 is suicide.
                </p>

                <h3>Step 2: Optimize Your Catalogue</h3>
                <p>
                    Search algorithms on GeM prioritize "Golden Parameters". Ensure your product listing has:
                </p>
                <ul className="list-none pl-0 space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Complete Technical Specifications</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> High-Resolution Images (White Background)</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> ISO/BIS Clearances</li>
                </ul>

                <h3>Step 3: The "Reverse Auction" Hack</h3>
                <p>
                    In a Reverse Auction (RA), prices drop rapidly. Do not reveal your lowest price immediately. 
                    Wait for the last 15 minutes. Watch the "L1 Rank" indicator. Drop your price in small increments 
                    to frustrate competitors while protecting your margin.
                </p>

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-xl">
                    <h4 className="text-indigo-900 font-bold mb-2">Pro Tip: Don't Ignore "BoQ" Bids</h4>
                    <p className="text-indigo-700 text-base m-0">
                        Bill of Quantity (BoQ) bids often have fewer participants than Direct Purchase. 
                        These are hidden goldmines for new sellers.
                    </p>
                </div>

                <h3>Conclusion</h3>
                <p>
                    Data wins contracts. Stop guessing and start predicting. 
                    Check out our <Link href="/playbook" className="text-indigo-600 font-semibold">GeM Playbook</Link> for more advanced strategies 
                    or contact us for professional consultancy.
                </p>
            </div>
        </article>
      </main>
    </div>
  );
}

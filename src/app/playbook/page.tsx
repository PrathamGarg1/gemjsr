"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Trophy, Target } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PlaybookPage() {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 md:px-6 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-sm tracking-wide mb-6"
          >
            <BookOpen className="h-4 w-4" />
            THE OFFICIAL GUIDE
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            The GeM Playbook: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              How to Win Government Tenders India
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stop guessing. This is the zero-to-hero guide for winning bids on the <strong>Government e-Marketplace (GeM)</strong> in 2026. Mastering the <strong>GeM Bidding Process</strong> starts here.
          </p>
        </div>

        {/* Content Chapters */}
        <div className="space-y-12">
          
          {/* Chapter 1 */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <span className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">01</span>
              The Golden Rule: L1 is King
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600">
              <p className="mb-4">
                In government tenders, <strong>L1 means "Lowest Bidder"</strong>. Unlike private corporate deals where relationships matter, government contracts are legally required to be awarded to the qualified bidder with the lowest price.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                <p className="font-semibold text-amber-800 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  The Trap
                </p>
                <p className="text-amber-700 text-sm mt-1">
                  Most sellers bid their "best price". This is wrong. You simply need to bid ₹1 lower than the second-best guy. But how do you know his price? That's where historical data comes in.
                </p>
              </div>
            </div>
          </section>

          {/* Chapter 2 */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <span className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">02</span>
              How to Bid on BoQ (Bill of Quantities)
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Step 1: Technical Qualification (The Gate)</h3>
                  <p className="text-slate-600 text-sm">Ensure your product meets every single specification. One missed certificate (like BIS or ISO) gets you rejected before price opening.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Step 2: Brand Approval</h3>
                  <p className="text-slate-600 text-sm">If you are a reseller, you MUST have the OEM's authorization letter uploaded on GeM. Without it, your catalog is invisible.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Step 3: The Price War</h3>
                  <p className="text-slate-600 text-sm">This is where you use our tool. Search for similar past tenders. See what the winning price was last month. Quote slightly below that.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Chapter 3 */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <span className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">03</span>
              Documents You Need (Checklist)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <ShieldCheck className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium text-slate-700">Udyam Registration</span>
               </div>
               <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <ShieldCheck className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium text-slate-700">GST Certificate</span>
               </div>
               <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <ShieldCheck className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium text-slate-700">OEM Authorization (MAF)</span>
               </div>
               <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <ShieldCheck className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium text-slate-700">Past Performance Docs</span>
               </div>
            </div>
          </section>

        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>
            <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to win your first contract?</h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto relative z-10">
              Use our AI search tool to find the perfect price point for your next bid.
            </p>
            <Link href="/">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-indigo-50 font-bold px-8 h-12 relative z-10">
                Start Analysis <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
        </div>

        {/* JSON-LD Schema for SEO */}
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The GeM Portal Playbook: How to Win Government Tenders",
            "description": "A comprehensive guide to winning L1 bids on the Government e-Marketplace (GeM). Learn about BoQ, technical qualification, and pricing strategies.",
            "author": {
              "@type": "Organization",
              "name": "gembid.help"
            },
            "publisher": {
              "@type": "Organization",
              "name": "gembid.help",
              "logo": {
                "@type": "ImageObject",
                "url": "https://gembid.help/logo.png"
              }
            },
            "datePublished": "2025-01-01",
            "dateModified": "2026-02-03"
          })
        }}
      />
      </main>
    </div>
  );
}

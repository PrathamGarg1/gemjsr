"use client";

import { motion } from "framer-motion";
import { Check, X, Star, Users, PieChart, ArrowRight, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ConsultancyPage() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900 font-sans">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 md:px-6">
        
        {/* Hero */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-1 border-emerald-200 bg-emerald-50 text-emerald-700 font-bold tracking-wide">
             #1 RATED CONSULTANCY ALTERNATIVE
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8">
            The Best <span className="text-indigo-600">eTender Consultancy</span><br/>
            is not a human. It's AI.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Traditional consultants charge <strong>₹50,000+</strong> and take days to analyze data. 
            Our AI does it in <strong>seconds</strong>, for a fraction of the cost.
          </p>
          <div className="flex justify-center gap-4">
             <Link href="/">
                <Button size="lg" className="h-14 px-8 text-lg bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-200">
                    Try AI Consultancy Free
                </Button>
             </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto mb-24">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
                <h2 className="text-3xl font-bold text-center mb-12">Why We Are Better</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Header Col */}
                    <div className="hidden md:block space-y-8 pt-20 font-semibold text-slate-500">
                        <div className="h-8">Cost per Tender</div>
                        <div className="h-8 border-t border-slate-200 pt-8">Time to Analyze</div>
                        <div className="h-8 border-t border-slate-200 pt-8">Accuracy</div>
                        <div className="h-8 border-t border-slate-200 pt-8">Availability</div>
                    </div>

                    {/* Human Consultant */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative opacity-75 grayscale-[0.5]">
                        <div className="text-center mb-8">
                            <Users className="h-10 w-10 mx-auto text-slate-400 mb-3" />
                            <h3 className="font-bold text-xl">Human Agent</h3>
                        </div>
                        <div className="space-y-8 text-center md:text-left">
                            <div className="h-8 font-medium text-red-500">₹5,000 - ₹50,000</div>
                            <div className="h-8 md:border-t border-slate-100 pt-0 md:pt-8 text-slate-600">3-5 Days</div>
                            <div className="h-8 md:border-t border-slate-100 pt-0 md:pt-8 text-slate-600">Prone to Errors</div>
                            <div className="h-8 md:border-t border-slate-100 pt-0 md:pt-8 text-slate-600">9 AM - 5 PM</div>
                        </div>
                    </div>

                    {/* AI Consultant */}
                    <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl relative transform md:-translate-y-4">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            WINNER
                        </div>
                        <div className="text-center mb-8">
                            <PieChart className="h-10 w-10 mx-auto text-indigo-400 mb-3" />
                            <h3 className="font-bold text-xl">gembid.help AI</h3>
                        </div>
                        <div className="space-y-8 text-center md:text-left">
                            <div className="h-8 font-bold text-emerald-400">FREE / Minimal</div>
                            <div className="h-8 border-t border-slate-700 pt-8">Instant (2 Seconds)</div>
                            <div className="h-8 border-t border-slate-700 pt-8">100% Data Backed</div>
                            <div className="h-8 border-t border-slate-700 pt-8">24/7/365</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Services List for SEO */}
        <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Consultancy Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    "GeM Registration & Profile Management",
                    "Category & Product Upload Assistance",
                    "Vendor Assessment (Guidance)",
                    "L1 Price Estimation Report",
                    "Competitor Analysis",
                    "Bid Documentation Checklist"
                ].map((service, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/50 transition-colors">
                        <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                            <Check className="h-5 w-5 text-emerald-600" />
                        </div>
                        <span className="font-medium text-slate-700">{service}</span>
                    </div>
                ))}
            </div>
        </section>

        {/* JSON-LD Schema for SEO */}
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "eTender Consultancy",
            "provider": {
              "@type": "Organization",
              "name": "gembid.help"
            },
            "areaServed": "India",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "GeM Consultancy Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "L1 Price Prediction"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "GeM Registration Help"
                  }
                }
              ]
            },
            "description": "Best automated eTender consultancy for GeM Portal. Get L1 price predictions, competitor analysis, and bid management services instantly."
          })
        }}
      />
      </main>
    </div>
  );
}

"use client";

import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShieldCheck, TrendingUp, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 md:px-6 container mx-auto max-w-4xl">
        <Breadcrumbs />
        
        <header className="mb-12 text-center">
           <Badge variant="outline" className="mb-4 text-indigo-600 border-indigo-200 bg-indigo-50">About Us</Badge>
           <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Democratizing Government Tenders</h1>
           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
             gembid.help is the world's first AI-powered intelligence platform dedicated to the Government e-Marketplace (GeM).
           </p>
        </header>

        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Small businesses in India lose millions in potential revenue because they don't know the "Winning Price". 
                The procurement system is opaque, and new vendors often bid too high or too low.
            </p>
            <p className="text-lg text-slate-600 mb-0 leading-relaxed">
                We built <strong>gembid.help</strong> to change that. By analyzing millions of historical contract records, 
                our AI predicts the L1 (Lowest One) price with 98% accuracy, giving power back to the SME.
            </p>
        </section>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Data Driven</h3>
                <p className="text-sm text-slate-500">We don't guess. We rely on 3+ years of scraped GeM public data.</p>
            </div>
             <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Ethical & Legal</h3>
                <p className="text-sm text-slate-500">We only use publicly available contract information to generate insights.</p>
            </div>
             <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Vendor First</h3>
                <p className="text-sm text-slate-500">Built by ex-government consultants who understand your pain.</p>
            </div>
        </div>
      </main>
    </div>
  );
}

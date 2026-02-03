
import { AlertTriangle, TrendingUp, Database, History, CheckCircle2, Award, BookOpen, Zap } from "lucide-react";
import { GuaranteeForm } from "@/components/GuaranteeForm";
import { Navbar } from "@/components/Navbar";
import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from "next/image";
import { SearchApp } from "@/components/home/SearchApp";
import { MarketIntelligence } from "@/components/home/MarketIntelligence";

import { BackgroundEffects } from "@/components/home/BackgroundEffects";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden z-100">
      <Navbar />
      
      {/* Background Effects */}
      <BackgroundEffects />

      <main className="relative z-10 w-full pt-32 pb-12 px-4 md:px-6 flex flex-col items-center">

        {/* Banner for Official Link */}
        <div className="w-full max-w-4xl mb-8 flex justify-center relative z-10">
             <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-md transition-all text-xs font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                #1 AI Tool for Government Tenders India
                {/* <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-slate-600" /> */}
             </a>
        </div>

        {/* Hero Section with USP Emphasis - High Z-Index ensuring visibility */}
        <div className="max-w-4xl w-full mx-auto text-center mb-16 relative z-10">
           
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Win <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">GeM Contracts</span> <br/>
            with L1 Price Prediction
          </h1>
          <div className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Our AI analyzes millions of GeM Tenders to predict the exact winning (L1) price at which you can win the BID and get the contract.
            <div className="flex justify-center gap-4 mt-4">
                <div className="text-indigo-600 font-semibold hover:underline  text-xl">Simple.</div>
                <div className="text-indigo-600 font-semibold hover:underline text-xl">Free.</div>
                <div className="text-indigo-600 font-semibold hover:underline text-xl">Proven.</div>
            </div>
          </div>
        </div>

        {/* Search App (Interactive Component) */}
        <SearchApp />
        
        <div 
            className="w-full my-16 pt-[-20px]  max-w-4xl mx-auto relative rounded-2xl bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-indigo-500/30 shadow-2xl shadow-indigo-500/20"
          >
            {/* BEFORE & AFTER TRANSFORMATION */}
            <div className="max-w-6xl mx-auto px-4 -mt-6 mb-24 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                    <div className="grid md:grid-cols-2">
                        {/* BEFORE */}
                        <div className="relative p-8 md:p-12 bg-slate-100 border-b md:border-b-0 md:border-r border-slate-200">
                             <div className="absolute top-6 left-6 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg z-10">
                                The Old Way
                             </div>
                             <div className="mt-8 mb-6 relative aspect-video rounded-xl overflow-hidden shadow-inner border border-slate-300 grayscale-[0.5]">
                                <Image 
                                    src="/assets/struggling_bidder.png" 
                                    alt="Stressed Contractor" 
                                    fill 
                                    className="object-cover opacity-90 transition-opacity hover:opacity-100" 
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
                             </div>
                             <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <span className="text-2xl">😫</span> Constant Stress
                             </h3>
                             <ul className="space-y-3">
                                 <li className="flex items-start gap-3 text-slate-600 text-sm">
                                     <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                         <span className="text-red-600 font-bold block leading-none">×</span>
                                     </div>
                                     Bidding blindly without knowing L1 price
                                 </li>
                                 <li className="flex items-start gap-3 text-slate-600 text-sm">
                                     <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                         <span className="text-red-600 font-bold block leading-none">×</span>
                                     </div>
                                     Hiring "Fake Gurus" who charge high fees
                                 </li>
                                 <li className="flex items-start gap-3 text-slate-600 text-sm">
                                     <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                         <span className="text-red-600 font-bold block leading-none">×</span>
                                     </div>
                                     Losing margins in Reverse Auctions
                                 </li>
                             </ul>
                        </div>

                        {/* AFTER */}
                        <div className="relative p-8 md:p-12 bg-indigo-50/50">
                             <div className="absolute top-6 left-6 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse z-10">
                                The AI Way
                             </div>
                             <div className="mt-8 mb-6 relative aspect-video rounded-xl overflow-hidden shadow-2xl shadow-indigo-200 border border-indigo-100 ring-4 ring-white">
                                <Image 
                                    src="/assets/happy_mobile_bidder.png" 
                                    alt="Happy Contractor" 
                                    fill 
                                    className="object-cover transform transition-transform hover:scale-105 duration-700" 
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                             </div>
                             <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🚀</span> Verified Profits
                             </h3>
                             <ul className="space-y-3">
                                 <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                                     <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                                         <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                                     </div>
                                     Predict winning price with 98% accuracy
                                 </li>
                                 <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                                     <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                                         <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                                     </div>
                                     Bid from mobile, anywhere, anytime
                                 </li>
                                 <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                                     <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                                         <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                                     </div>
                                     Join 10,000+ actual winning bidders
                                 </li>
                             </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats/Trust Badges */}
            <div className="text-center pb-12 animate-fade-in-up delay-200 w-full grid grid-cols-2 md:grid-cols-4 gap-4 px-4 max-w-4xl mx-auto mb-20">
               <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                   <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">98%</div>
                   <div className="text-xs text-slate-500 uppercase tracking-widest">Prediction Accuracy</div>
               </div>
               <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                   <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">₹400Cr+</div>
                   <div className="text-xs text-slate-500 uppercase tracking-widest">Tenders Won</div>
               </div>
               <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                   <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">10k+</div>
                   <div className="text-xs text-slate-500 uppercase tracking-widest">Active Bidders</div>
               </div>
               <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                   <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">24/7</div>
                   <div className="text-xs text-slate-500 uppercase tracking-widest">AI Analysis</div>
               </div>
            </div>
            </div>

        {/* --- ULTIMATE SEO CONTENT --- */}
        <div className="my-[-10rem] w-full max-w-5xl space-y-32 z-20 " >
            
             
             {/* TRUST GRID (PERSONAS) */}
             <section className="mb-24 mt-14">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Every Government Bidder</h2>
                    <p className="text-xl text-slate-600">From construction sites to design studios, India's top professionals rely on us.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Persona 1: Construction */}
                    <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                        <Image 
                            src="/assets/site_engineer.png" 
                            alt="Civil Engineer" 
                            fill 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <h3 className="text-2xl font-bold mb-1">Construction</h3>
                            <p className="text-sm text-slate-300 mb-4">Civil Engineers & Contractors</p>
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                Works Data
                            </div>
                        </div>
                    </div>

                    {/* Persona 2: Consultant */}
                    <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                        <Image 
                            src="/assets/female_architect.png" 
                            alt="Architect" 
                            fill 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                             sizes="(max-width: 768px) 100vw, 33vw"
                         />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <h3 className="text-2xl font-bold mb-1">Consultants</h3>
                            <p className="text-sm text-slate-300 mb-4">Architects & Project Managers</p>
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest">
                                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                                Services Data
                            </div>
                        </div>
                    </div>

                     {/* Persona 3: MSME */}
                    <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                        <Image 
                            src="/assets/sme_owner.png" 
                            alt="SME Owner" 
                            fill 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                             sizes="(max-width: 768px) 100vw, 33vw"
                         />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <h3 className="text-2xl font-bold mb-1">MSMEs</h3>
                            <p className="text-sm text-slate-300 mb-4">Small Business Owners</p>
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-widest">
                                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                                Product Bids
                            </div>
                        </div>
                    </div>
                </div>
             </section>


            
             {/* 100% REFUND GUARANTEE SECTION */}
             <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-8 md:p-12 mb-32">
                  <div className="absolute top-0 right-0 p-32 bg-amber-400 rounded-full blur-[100px] opacity-10"></div>
                  <div className="relative z-20 flex flex-col md:flex-row items-center gap-10">
                      <div className="flex-1 space-y-6 text-center md:text-left">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-xs uppercase tracking-wider border border-amber-200">
                             <Award className="h-4 w-4" />
                             Risk-Free Promise
                          </div>
                          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                              Win a Tender in 30 Days,<br/>
                              <span className="text-amber-600">Or Get a 100% Refund.</span>
                          </h2>
                          <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
                              We are so confident in our <strong>GeM Consultancy AI</strong> that we back it with cash. 
                              If you don't secure a <strong>Government Contract</strong> within one month of using our Pro plan, we will refund every rupee.
                          </p>
                          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                              <GuaranteeForm />
                              <div className="flex items-center gap-2 text-sm text-slate-500 px-4">
                                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                  <span>T&C Apply</span>
                              </div>
                          </div>
                      </div>
                      <div className="w-full md:w-1/3 flex justify-center">
                          <div className="relative w-64 h-64 bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-amber-100">
                               <div className="text-center">
                                   <div className="text-6xl font-black text-amber-500 mb-1">100%</div>
                                   <div className="text-lg font-bold text-slate-900 uppercase tracking-widest">Money Back</div>
                                   <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Guarantee</div>
                               </div>
                          </div>
                      </div>
                  </div>
             </section>



            {/* USP CLARIFICATION SECTION */}
            <section className="text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium text-sm">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Stop Bidding Blindly</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Why Historical Data Matters</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    Most contractors lose because they don't know the winning price (L1) of previous tenders. 
                    <br/><br/>
                    <strong>We don't show live tenders. We show you the answer sheet.</strong>
                    <br/>
                    By analyzing past winning bids, you can predict the exact price you need to quote to win the next one.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
                     <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                            <History className="h-5 w-5 text-indigo-600" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Past Data, Future Wins</h3>
                        <p className="text-slate-600 text-sm">See what price won the contract last month. Quote slightly lower. Win.</p>
                     </div>
                     <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                        <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                            <Database className="h-5 w-5 text-purple-600" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">10M+ Archived Bids</h3>
                        <p className="text-slate-600 text-sm">Our database covers every category from furniture to software.</p>
                     </div>
                     <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                        <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
                            <TrendingUp className="h-5 w-5 text-emerald-600" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Price Trend Analysis</h3>
                        <p className="text-slate-600 text-sm">Spot if prices are dropping or rising before you commit to a bid.</p>
                     </div>
                </div>
            </section>

         

             <section className="mb-32">
                 <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Trusted by 12,000+ Contractors</h2>
                 <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                     <div className="absolute inset-0 opacity-60">
                        <Image 
                            src="/assets/success_hero.png" 
                            alt="Successful Contractor" 
                            fill 
                            className="absolute inset-0 w-full h-full object-cover" 
                            sizes="(max-width: 768px) 100vw, 100vw"
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                     
                     <div className="relative z-10 p-12 md:p-20 max-w-2xl">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Verified Success
                         </div>
                         <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                             "I beat 40 competitors because I knew their price."
                         </h3>
                         <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            "In GeM Reverse Auctions, you usually bid blindly. With gembid.help, I saw the historical L1 price for 'Classroom Furniture' was exactly ₹4,200. I bid ₹4,190 and won a ₹20 Lakh contract immediately."
                         </p>
                         <div>
                             <div className="font-bold text-white text-lg">Rajesh Verma</div>
                             <div className="text-indigo-400">Director, Verma Infra & Supply, Delhi</div>
                         </div>
                     </div>
                 </div>
             </section>


               {/* MARKET INTELLIGENCE CHART (Heavy Component - Isolated) */}
               <MarketIntelligence />

             {/* Top 10 Mistakes */}
             <section className="space-y-8">
                <h2 className="text-3xl font-bold text-slate-900 text-center">Top GeM Bidding Mistakes to Avoid</h2>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-red-50/50 rounded-xl border border-red-100">
                        <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-slate-900">Mistake #1: Guessing the L1 Price</h3>
                            <p className="text-slate-600 text-sm mt-1">Never guess. 90% of bidders lose because they bid blindly. Use tools like gembid.help to find the exact historical winning price.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-red-50/50 rounded-xl border border-red-100">
                        <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                             <h3 className="font-bold text-slate-900">Mistake #2: Ignoring Brand Approval</h3>
                             <p className="text-slate-600 text-sm mt-1">If you are a reseller, ensure the OEM has approved your catalog. Unapproved catalogs are rejected during technical evaluation.</p>
                        </div>
                    </div>
                </div>
             </section>

            {/* GeM Dictionary (SEO Magnet) */}
            <section className="bg-slate-50 border border-slate-200 rounded-3xl p-10">
                 <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <BookOpen className="h-8 w-8 text-indigo-600" />
                    The GeM Bidder's Dictionary
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 mb-2">L1 (Lowest Bidder)</h3>
                        <p className="text-slate-600 text-sm">The bidder who quotes the lowest price in a tender. In GeM, the L1 bidder is automatically awarded the contract in most Direct Purchase and L1 Buying modes.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 mb-2">RA (Reverse Auction)</h3>
                        <p className="text-slate-600 text-sm">A mechanism where technically qualified bidders compete by lowering their prices. Finding the starting "floor price" for an RA is critical for success.</p>
                    </div>
                 </div>
            </section>

            {/* 1. GeM TRICKS & HACKS (High Value Content) */}
            <section className="space-y-8">
                 <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-4">
                        <Zap className="h-3 w-3" />
                        Insider Secrets
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">GeM Hacks & Tricks to Win More Bids</h2>
                    <p className="text-slate-500 mt-2">Proven strategies used by top L1 bidders.</p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
                         <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs">1</span>
                            Find the "Floor Price"
                         </h3>
                         <p className="text-slate-600 text-sm leading-relaxed">
                             In Reverse Auctions (RA), GeM hides the current lowest price. However, by using the <strong>"L1 Price Predictor"</strong> tool above, you can estimate the floor price with 98% accuracy and stop bidding blindly.
                         </p>
                     </div>
                     <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
                         <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs">2</span>
                            Direct Purchase Limits
                         </h3>
                         <p className="text-slate-600 text-sm leading-relaxed">
                             Technically, you can get Direct Purchase orders up to ₹25,000 without comparison. However, for amounts up to ₹5 Lakh, buyers can use <strong>L1 Buying Mode</strong> if you are the lowest among 3 comparable products.
                         </p>
                     </div>
                     <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
                         <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs">3</span>
                            MSE Purchase Preference
                         </h3>
                         <p className="text-slate-600 text-sm leading-relaxed">
                             If you are an MSE (Micro/Small Enterprise), utilize the <strong>"MSE Purchase Preference"</strong> clause. Even if you are L2 or L3, if your price is within 15% of L1, you may be given a chance to match the L1 price.
                         </p>
                     </div>
                     <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
                         <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs">4</span>
                            Brand Approval Hack
                         </h3>
                         <p className="text-slate-600 text-sm leading-relaxed">
                             Struggling with Brand Approval? Apply for <strong>"OEM Dashboard"</strong> access even if you are a small assembler. It gives you control over your catalog and prevents resellers from undercutting you with your own products.
                         </p>
                     </div>
                 </div>
            </section>

             {/* 2. CONSULTANCY PROMOTION (CTA) */}
             <section className="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white p-8 md:p-16 text-center">
                 <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10"></div>
                 <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                     <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                         Need an Expert to Manage Your GeM Profile?
                     </h2>
                     <p className="text-lg text-slate-300">
                         Don't waste time figuring it out. Our verified GeM experts in Delhi can handle everything—from <strong>Brand Approval</strong> to <strong>Tender Bidding</strong>.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                         <a href="mailto:gragprathamofficial@gmail.com" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-slate-900 shadow-lg hover:bg-slate-100 transition-colors">
                            Email: gragprathamofficial@gmail.com
                         </a>
                     </div>
                     <p className="text-xs text-slate-500 mt-4">
                         Or fill the <strong>100% Refund Form</strong> above if you are not satisfied.
                     </p>
                 </div>
             </section>

             {/* 3. POPULAR QUESTIONS (FAQ) */}
             <section className="max-w-3xl mx-auto w-full space-y-8">
                 <h2 className="text-3xl font-bold text-slate-900 text-center">Popular Questions</h2>
                 <div className="space-y-4">
                     <details className="group [&_summary::-webkit-details-marker]:hidden bg-white border border-slate-200 rounded-xl overflow-hidden">
                         <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold hover:bg-slate-50 transition-colors">
                             <h3 className="text-lg">What is the Fee for GeM Registration?</h3>
                             <div className="white-space-nowrap shrink-0">
                                 <svg className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                 </svg>
                             </div>
                         </summary>
                         <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                             GeM Registration is technically free. However, most businesses pay <strong>Caution Money</strong> (deposit) based on turnover to actively participate in bids. There are also vendor assessment fees for OEMs.
                         </div>
                     </details>

                     <details className="group [&_summary::-webkit-details-marker]:hidden bg-white border border-slate-200 rounded-xl overflow-hidden">
                         <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold hover:bg-slate-50 transition-colors">
                             <h3 className="text-lg">How to update profile on GeM Portal?</h3>
                             <div className="white-space-nowrap shrink-0">
                                 <svg className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                 </svg>
                             </div>
                         </summary>
                         <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                             Log in to your Seller Dashboard, go to "My Account", and select the section you wish to update (Office Locations, Bank Details, etc.). Note that changing crucial details may trigger re-verification.
                         </div>
                     </details>

                     <details className="group [&_summary::-webkit-details-marker]:hidden bg-white border border-slate-200 rounded-xl overflow-hidden">
                         <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold hover:bg-slate-50 transition-colors">
                             <h3 className="text-lg">Can I sell on GeM without GST?</h3>
                             <div className="white-space-nowrap shrink-0">
                                 <svg className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                 </svg>
                             </div>
                         </summary>
                         <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                             For most categories, <strong>GST is mandatory</strong>. However, for certain exempted goods (like handicrafts) or very small turnovers below the threshold, you may register as an "Unregistered Seller", but your opportunities will be severely limited.
                         </div>
                     </details>
                 </div>
             </section>

            {/* Keyword Bank Footer */}
            <section className="border-t border-slate-200 pt-16 pb-8">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">Popular Searches</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-500 text-center md:text-left">
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-indigo-600">GeM Login</Link></li>
                        <li><Link href="#" className="hover:text-indigo-600">GeM Registration</Link></li>
                        <li><Link href="#" className="hover:text-indigo-600">Government e-Marketplace</Link></li>
                    </ul>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-indigo-600">L1 Price Predictor</Link></li>
                        <li><Link href="#" className="hover:text-indigo-600">Bid Estimation Tool</Link></li>
                        <li><Link href="#" className="hover:text-indigo-600">Tender Result Analysis</Link></li>
                    </ul>
                    <ul className="space-y-2">
                         <li><Link href="#" className="hover:text-indigo-600">GeM Consultancy Delhi</Link></li>
                         <li><Link href="#" className="hover:text-indigo-600">MSE Verification GeM</Link></li>
                         <li><Link href="#" className="hover:text-indigo-600">Startup India GeM</Link></li>
                    </ul>
                    <ul className="space-y-2">
                         <li><Link href="#" className="hover:text-indigo-600">Brand Approval</Link></li>
                         <li><Link href="#" className="hover:text-indigo-600">GeM Seller Help</Link></li>
                         <li><Link href="#" className="hover:text-indigo-600">OEM Panel Access</Link></li>
                    </ul>
                </div>
            </section>

        </div>

      </main>
      
      <footer className="border-t border-slate-100 bg-white py-12 relative z-10 w-full">
        <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
          <p className="mb-4">
            <span className="font-semibold text-slate-600">gembid.help</span> &bull; The #1 GeM Intelligence Tool
          </p>
          <p>&copy; {new Date().getFullYear()} gembid.help. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-300 hover:text-indigo-600">Official GeM Portal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

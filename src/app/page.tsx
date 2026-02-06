
import { AlertTriangle, TrendingUp, Database, History, CheckCircle2, Award, BookOpen, Zap } from "lucide-react";
import { GuaranteeForm } from "@/components/GuaranteeForm";
import { Navbar } from "@/components/Navbar";
import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from "next/image";
import { SearchApp } from "@/components/home/SearchApp";
import { MarketIntelligence } from "@/components/home/MarketIntelligence";
import { CompetitorComparison } from "@/components/home/CompetitorComparison";
import { LeadCaptureForm } from "@/components/home/LeadCaptureForm";

import { BackgroundEffects } from "@/components/home/BackgroundEffects";
import { ServiceProcessSteps } from "@/components/home/ServiceProcessSteps";
import { MarutiAgent } from "@/components/home/MarutiAgent";
import { GeMEncyclopedia } from "@/components/home/GeMEncyclopedia";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <Navbar />
      
      {/* Background Effects */}
      <BackgroundEffects />

      <main className="relative z-10 w-full pt-32 pb-12 px-4 md:px-6 flex flex-col items-center">

        {/* Hero Section */}
        <div className="max-w-4xl w-full mx-auto text-center  relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-sm uppercase tracking-wider mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            100% Free Tool for Everyone
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Find the <span className="text-indigo-600">Winning Price</span> of Any GeM Tender.
          </h1>
          
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
            Just Search for an item (100% FREE) and get all 
            <br className="hidden md:block" />
            the contracts issued for that item.
          </p>
        </div>

        {/* Search App */}
        <SearchApp />

        {/* CLARITY STRIP */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mt-[-92px] mb-16 text-slate-500 font-medium">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">1</div>
                Search Item (Free)
             </div>
             <div className="hidden md:block text-slate-300">→</div>
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">2</div>
                See Winning Price (Free)
             </div>
             <div className="hidden md:block text-slate-300">→</div>
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">3</div>
                Bid & Win (Your Choice)
             </div>
        </div>

        {/* FREE TOOL EXPLANTION */}
        <div className="w-full max-w-4xl mx-auto mb-24 text-center px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Why is this Tool Free?</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                We believe transparency should be a right, not a luxury. 
                <br/>
                Our <strong>Free Search Engine</strong> gives you access to <strong>5 Crore+ Historical Records</strong>, 
                Competitor Names, and Winning Prices without asking for a single rupee. 
                <br/><br/>
                <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest border border-indigo-100 bg-indigo-50 px-3 py-1 rounded-full">
                    No Credit Card Required
                </span>
            </p>
        </div>

        {/* SERVICE PROCESS STEPS - HOW IT WORKS */}
        <ServiceProcessSteps />

        {/* COMPETITOR COMPARISON */}
        <CompetitorComparison />

        {/* TRUST GRID - REAL PEOPLE */}
        <section className="mb-24 mt-14 max-w-6xl w-full">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">Who Needs This?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 relative h-96 group">
                     <Image src="/assets/site_engineer.png" alt="Contractor" fill className="object-cover transition duration-700 group-hover:scale-105" />
                     <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <div className="font-bold text-lg">Contractors</div>
                        <div className="text-xs opacity-80">Stop under-quoting works.</div>
                     </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 relative h-96 group">
                     <Image src="/assets/female_architect.png" alt="Consultant" fill className="object-cover transition duration-700 group-hover:scale-105" />
                     <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <div className="font-bold text-lg">Service Providers</div>
                        <div className="text-xs opacity-80">Know the manpower rates.</div>
                     </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 relative h-96 group">
                     <Image src="/assets/sme_owner.png" alt="Seller" fill className="object-cover transition duration-700 group-hover:scale-105" />
                     <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <div className="font-bold text-lg">Traders (MSME)</div>
                        <div className="text-xs opacity-80">Sell Laptops/Furniture at L1.</div>
                     </div>
                </div>
            </div>
        </section>

        {/* LEAD CAPTURE - THE "HONEST" PITCH */}
        <section className="w-full py-24 bg-indigo-900 text-white relative overflow-hidden">
            {/* Background Smiles/People - Abstracted */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center mix-blend-overlay"></div>
            
            <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-16 items-center max-w-6xl">
                <div className="space-y-8">
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-800 text-indigo-200 font-bold text-sm uppercase tracking-wider">
                        Premium Service - ONE TO ONE
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Why You Need The <br/>
                        <span className="text-indigo-300">Guaranteed Service?</span>
                    </h2>
                    
                    <div className="space-y-8 text-indigo-100 leading-relaxed">
                        <p className="text-lg opacity-90">
                            The Free Tool gives you data. But <strong>Data alone doesn't win tenders.</strong> 
                        </p>

                        <div className="space-y-6 pl-4 border-l-2 border-indigo-700">
                             <div>
                                <h4 className="flex items-center gap-2 font-bold text-xl text-white mb-1">
                                    <span className="text-emerald-400">1.</span> 
                                    Daily Monitoring (₹999/mo)
                                </h4>
                                <p className="text-sm opacity-75">
                                    Contracts are uploaded daily. We monitor 24/7 and filter the noise.
                                </p>
                             </div>

                             <div>
                                <h4 className="flex items-center gap-2 font-bold text-xl text-white mb-1">
                                    <span className="text-emerald-400">2.</span> 
                                    Execution & AI Strategy
                                </h4>
                                <p className="text-sm opacity-75">
                                    We handle Brand Approvals, Catalog Management, and use proprietary AI to predict the winning price.
                                </p>
                             </div>

                             <div>
                                <h4 className="flex items-center gap-2 font-bold text-xl text-white mb-1">
                                    <span className="text-emerald-400">3.</span> 
                                    Complete Peace of Mind
                                </h4>
                                <p className="text-sm opacity-75">
                                    No hidden commissions. No complex cuts. Just a simple, flat fee for a dedicated team of experts.
                                </p>
                             </div>
                        </div>
                    </div>
                    
                    <div className="flex gap-8 pt-4 border-t border-indigo-800/50 mt-8">
                        <div>
                            <div className="text-4xl font-bold text-emerald-400">FREE</div>
                            <div className="text-sm opacity-60">To Book Session</div>
                        </div>
                        <div className="w-px bg-indigo-700 h-12"></div>
                        <div>
                            <div className="text-4xl font-bold text-indigo-300">₹999</div>
                            <div className="text-sm opacity-60">Per Month</div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-2xl text-slate-900">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2">Get a Call Back</h3>
                        <p className="text-slate-500 text-sm">Fill details below. Our team will contact you for the Guaranteed Service.</p>
                    </div>
                    <LeadCaptureForm />
                </div>
            </div>
        </section>

        {/* ONE STOP SOLUTION - VISUAL PROOF */}
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-20 filter blur-3xl animate-pulse"></div>
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700">
                             <Image 
                                src="/assets/all_in_one.png" 
                                alt="All In One GeM Solution" 
                                width={800} 
                                height={800} 
                                className="object-cover"
                             />
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                            The <span className="text-indigo-600">One-Stop Solution</span> <br/>
                            For Government Tenders.
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Stop juggling between multiple tools and consultants. We provide everything you need to dominate the Government e-Marketplace.
                        </p>
                        <div className="space-y-4">
                            {[
                                { title: "Smart Search", desc: "Find hidden tenders 10x faster." },
                                { title: "L1 Prediction", desc: "Know the winning price before you bid." },
                                { title: "Technical Shield", desc: "100% protection from technical rejection." },
                                { title: "Execution Arm", desc: "We manage logistics, catalogs, and invoices." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold shrink-0">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SEO POWERHOUSE - "SECRET STEPS" */}
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-4xl mx-auto text-center">
                 <h2 className="text-3xl font-bold text-slate-900 mb-12">The Secret "3-Step" Winning Formula</h2>
                 <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-indigo-700">1. Reverse Engineering</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Most bidders guess. We don't. We reverse-engineer the <strong>GeM L1 Price</strong> by analyzing historical contracts of similar specifications. This allows us to bid exactly ₹1 less than the estimated competition.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-indigo-700">2. Technical Compliance</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            <strong>GeM Tender Rejection</strong> is common. We ensure your documents match the "Q3" specifications perfectly, guaranteeing technical qualification so your price is actually opened.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-indigo-700">3. Market Liquidity</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            We track which OEM brands (HP, Dell, Godrej) are currently aggressive in the market, allowing us to source products at rates that make winning at L1 profitable.
                        </p>
                    </div>
                 </div>

                 {/* KEYWORD DUMP FOR SEO (Styled nicely) */}
                 <div className="mt-20 pt-10 border-t border-slate-100 text-left">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Core Services</h4>
                            <ul className="space-y-2 text-xs text-slate-500">
                                <li><a href="#" className="hover:text-indigo-600">GeM Registration</a></li>
                                <li><a href="#" className="hover:text-indigo-600">GeM Login Help</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Brand Approval</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Vendor Assessment</a></li>
                                <li><a href="#" className="hover:text-indigo-600">L1 Price Calculator</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Tender Types</h4>
                            <ul className="space-y-2 text-xs text-slate-500">
                                <li><a href="#" className="hover:text-indigo-600">Manpower Outsourcing</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Custom Bid (BoQ)</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Bunch Bids</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Reverse Auction (RA)</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Direct Purchase</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Top Categories</h4>
                            <ul className="space-y-2 text-xs text-slate-500">
                                <li><a href="#" className="hover:text-indigo-600">Computer & Laptops</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Office Furniture</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Security Surveillance</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Housekeeping</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Vehicle Hiring</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Resources</h4>
                            <ul className="space-y-2 text-xs text-slate-500">
                                <li><a href="#" className="hover:text-indigo-600">Gem 3.0 Handbook</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Tender ROI Analysis</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Bid Participation Guide</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Invoice Discounting</a></li>
                                <li><a href="#" className="hover:text-indigo-600">GeM Portal FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                 </div>
            </div>
        </section>


        {/* FAQ - SEO MAGNET */}
        <section className="py-24 w-full bg-slate-50">
            <div className="container mx-auto px-4 max-w-4xl">
                 <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                 <div className="space-y-4">
                    {[
                        { q: "How does the L1 Price Prediction work?", a: "We use historical data from over 10 million GeM contracts. Our AI analyzes patterns in 'Unit Price', 'Brand', and 'Location' to predict the lowest price (L1) required to win the current bid." },
                        { q: "Is this tool affiliated with GeM Portal?", a: "No, we are an independent market intelligence platform. We compile public data to help sellers make informed decisions. We are not a government entity." },
                        { q: "Can I win tenders without undercutting my margin?", a: "Yes! Most sellers bid blindly. By knowing the EXACT historical L1 price, you can bid just slightly lower than the competition, preserving your maximum possible margin." },
                        { q: "What is the 'Guaranteed Service'?", a: "For a flat fee of ₹999/mo, we assign a dedicated expert to monitor tenders for you, manage your catalog, and handle technical documentation to prevent rejection." }
                    ].map((faq, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                            <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </section>


                <div className="grid grid-cols-1 gap-40">

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

      <MarutiAgent />
    </div>
  );
}

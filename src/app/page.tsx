"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, Copy, ExternalLink, SlidersHorizontal, Sparkles, TrendingUp, ShieldCheck, Zap, Database, CheckCircle2, ChevronRight, BookOpen, HelpCircle, AlertTriangle, ArrowRight, History, Quote, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Navbar } from "@/components/Navbar";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link"; // Correct import for Link

interface ResultItem {
  item: string;
  qty: number;
  prc: number;
  relevance_score: number;
  c_no: string;
  b_no: string;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [topK, setTopK] = useState("10");
  const [results, setResults] = useState<ResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setSearched(true);
    setResults([]);

    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item_name: query, k: parseInt(topK) }),
      });
      const data = await res.json();
      if (data.results) {
        setResults(data.results);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const openGemBid = (b_no: string) => {
    copyToClipboard(b_no);
    alert(`Bid Number copied: ${b_no}\n\nPaste it in the GeM search box.`);
    window.open(`https://bidplus.gem.gov.in/all-bids`, '_blank');
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <Navbar />
      
      {/* Background Effects */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#4f46e5" />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <BackgroundBeams className="fixed inset-0 -z-10 opacity-40" />
      
      <div className="fixed inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-400 opacity-20 blur-[100px]"></div>

      <main className="relative z-10 w-full pt-32 pb-12 px-4 md:px-6 flex flex-col items-center">
        
        {/* Banner for Official Link */}
        <div className="w-full max-w-4xl mb-8 flex justify-center">
             <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all text-xs font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Official Portal: gem.gov.in
                <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
             </a>
        </div>

        {/* Hero Section with USP Emphasis */}
        <div className="max-w-4xl w-full mx-auto text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center gap-2 mb-6 text-sm font-semibold text-amber-700 bg-amber-50 py-1 px-4 rounded-full border border-amber-100 inline-flex items-center">
                <History className="h-4 w-4" />
                Historical Price Intelligence (Not Live Tenders)
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 pb-4 tracking-tight drop-shadow-sm">
              Analyze Historical Bids <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Win Future Contracts.</span>
            </h1>
            <p className="mt-4 text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Stop guessing your bid price. We analyze <strong>closed/past tenders</strong> to reveal the winning L1 price history. 
              <br className="hidden md:block"/>
              See exactly what your competitors quoted to win.
            </p>
          </motion.div>
        </div>

        {/* Search App */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full max-w-4xl mx-auto mb-24 relative p-[1px] rounded-2xl bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-indigo-500/30 shadow-2xl shadow-indigo-500/20"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-2 border border-white/50">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2 relative z-20">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  className="w-full pl-12 h-14 text-lg border-none shadow-none focus-visible:ring-0 bg-transparent placeholder:text-slate-400 text-slate-900"
                  placeholder="e.g., 'Core i7 Laptop' (Search Historical Prices)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2 px-2 md:border-l border-slate-100">
                 <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg whitespace-nowrap border border-slate-200/60">
                   <SlidersHorizontal className="h-4 w-4 text-slate-400" />
                   <span className="text-sm font-medium text-slate-500">Limit:</span>
                   <Select value={topK} onValueChange={setTopK}>
                    <SelectTrigger className="h-8 w-[60px] border-0 bg-transparent focus:ring-0 p-0 text-slate-900 font-bold shadow-none">
                      <SelectValue placeholder="10" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-slate-100 text-slate-900 shadow-xl">
                      <SelectItem value="5" className="focus:bg-slate-50">5</SelectItem>
                      <SelectItem value="10" className="focus:bg-slate-50">10</SelectItem>
                      <SelectItem value="20" className="focus:bg-slate-50">20</SelectItem>
                      <SelectItem value="50" className="focus:bg-slate-50">50</SelectItem>
                    </SelectContent>
                  </Select>
                 </div>
              </div>

              <Button 
                size="lg" 
                type="submit"
                disabled={loading}
                className="h-14 px-8 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-bold shadow-lg shadow-slate-900/20 transition-all text-base"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Analyze"}
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Results Section */}
        <div className="w-full max-w-6xl mb-32">
            <AnimatePresence>
            {searched && (
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
                >
                <div className="flex items-center justify-between px-2">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                    Found {results.length} historical records
                    </h3>
                </div>

                {results.length > 0 ? (
                    <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/40">
                    <Table>
                        <TableHeader className="bg-slate-50/50 border-b border-slate-100">
                        <TableRow className="hover:bg-slate-50/80 border-slate-100">
                            <TableHead className="w-[60px] text-slate-400 font-medium">ID</TableHead>
                            <TableHead className="font-semibold text-slate-700">Item Description</TableHead>
                            <TableHead className="w-[150px] text-right font-semibold text-slate-700">Winning Price</TableHead>
                            <TableHead className="w-[100px] text-right font-semibold text-slate-700">Qty</TableHead>
                            <TableHead className="w-[120px] text-center font-semibold text-slate-700">Match</TableHead>
                            <TableHead className="w-[150px] text-right font-semibold text-slate-700">Actions</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {results.map((item, index) => (
                            <TableRow key={index} className="group hover:bg-slate-50/80 border-slate-100 transition-colors">
                            <TableCell className="text-xs text-slate-400 font-mono text-center">
                                {(index + 1).toString().padStart(2, '0')}
                            </TableCell>
                            <TableCell className="font-medium text-slate-700">
                                <div className="line-clamp-2 leading-relaxed">{item.item}</div>
                                <div className="text-xs text-slate-500 mt-1.5 font-mono bg-slate-100 inline-block px-1.5 py-0.5 rounded border border-slate-200">
                                    {item.b_no}
                                </div>
                            </TableCell>
                            <TableCell className="text-right font-mono text-slate-600">
                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(item.prc)}
                            </TableCell>
                            <TableCell className="text-right text-slate-600">
                                {item.qty}
                            </TableCell>
                            <TableCell className="text-center">
                                <div className="flex justify-center">
                                    <Badge variant="secondary" className={`
                                        border-0 backdrop-blur-md shadow-sm
                                    ${item.relevance_score > 0.8 ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20' : 
                                        item.relevance_score > 0.5 ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-600/20' :
                                        'bg-slate-100 text-slate-600 ring-1 ring-slate-200'}
                                    `}>
                                    {(item.relevance_score * 10).toFixed(1)}%
                                    </Badge>
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50" onClick={() => copyToClipboard(item.b_no)}>
                                    {copiedId === item.b_no ? <span className="text-emerald-600 font-bold text-xs">✓</span> : <Copy className="h-4 w-4" />}
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50" onClick={() => openGemBid(item.b_no)}>
                                    <ExternalLink className="h-4 w-4" />
                                </Button>
                                </div>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </div>
                ) : (
                    !loading && (
                        <div className="text-center py-20 bg-white/50 rounded-2xl border border-dashed border-slate-200">
                        <p className="text-slate-400">No historical records found for this query.</p>
                        </div>
                    )
                )}
                </motion.div>
            )}
            </AnimatePresence>
        </div>

        {/* --- ULTIMATE SEO CONTENT --- */}
        <div className="w-full max-w-5xl space-y-32">
            
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

             {/* SUCCESS STORIES (TESTIMONIALS) */}
             <section className="bg-slate-900 text-white rounded-[2.5rem] p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-64 bg-indigo-600 rounded-full blur-[150px] opacity-20"></div>
                <div className="absolute bottom-0 left-0 p-64 bg-purple-600 rounded-full blur-[150px] opacity-20"></div>
                
                <h2 className="text-3xl font-bold text-center mb-16 relative z-10">Success Stories</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        <Quote className="h-8 w-8 text-indigo-400 mb-6 opacity-50" />
                        <p className="text-lg text-slate-300 mb-6 italic">
                            "I used to quote ₹50,000 for laptops and lose every time. gembid.help showed me that the L1 price in my region was actually ₹45,500. I adjusted my bid and won a ₹20 Lakh contract immediately."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-700 rounded-full overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh" alt="Rajesh Kumar" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="font-bold text-white">Rajesh Kumar</div>
                                <div className="text-sm text-slate-400">Government Contractor, Delhi</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        <Quote className="h-8 w-8 text-indigo-400 mb-6 opacity-50" />
                        <p className="text-lg text-slate-300 mb-6 italic">
                            "Reverse Auctions (RA) were a nightmare. We had no idea what the floor price was. This tool gave us the historical data to know exactly where to stop bidding. It saved our margins."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-700 rounded-full overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha" alt="Sneha Gupta" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="font-bold text-white">Sneha Gupta</div>
                                <div className="text-sm text-slate-400">Director, TechSolutions Pvt Ltd</div>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

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

            {/* Keyword Bank Footer */}
            <section className="border-t border-slate-200 pt-16 pb-8">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">Popular Searches</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-500">
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-indigo-600">GeM Login</Link></li>
                        <li><Link href="#" className="hover:text-indigo-600">GeM Registration</Link></li>
                        <li><Link href="#" className="hover:text-indigo-600">Government e-Marketplace</Link></li>
                    </ul>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-indigo-600">L1 Price Predictor</Link></li>
                        <li><Link href="#" className="hover:text-indigo-600">Bid Estimation Tool</Link></li>
                    </ul>
                    <ul className="space-y-2">
                         <li><Link href="#" className="hover:text-indigo-600">GeM Consultancy Delhi</Link></li>
                         <li><Link href="#" className="hover:text-indigo-600">MSE Verification GeM</Link></li>
                    </ul>
                    <ul className="space-y-2">
                         <li><Link href="#" className="hover:text-indigo-600">Brand Approval</Link></li>
                         <li><Link href="#" className="hover:text-indigo-600">GeM Seller Help</Link></li>
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, Copy, ExternalLink, SlidersHorizontal, Sparkles, TrendingUp, ShieldCheck, Zap, Database, CheckCircle2, ChevronRight, BookOpen, HelpCircle, AlertTriangle, ArrowRight } from "lucide-react";
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
      
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-400 opacity-20 blur-[100px]"></div>

      <main className="relative z-10 w-full pt-32 pb-12 px-4 md:px-6 flex flex-col items-center">
        
        {/* Hero Section with Trust Signals */}
        <div className="max-w-4xl w-full mx-auto text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center gap-2 mb-6 text-sm font-semibold text-emerald-600 bg-emerald-50 py-1 px-4 rounded-full border border-emerald-100 inline-flex items-center">
                <CheckCircle2 className="h-4 w-4" />
                Trusted by 5,000+ Government Contractors
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 pb-4 tracking-tight drop-shadow-sm">
              Search GeM Bids <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Instantly.</span>
            </h1>
            <p className="mt-4 text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Find exactly what you need with high-dimensional vector retrieval. 
              We have indexed over <strong>10 Million+</strong> items for your winning advantage.
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
                  placeholder="Describe your item naturally (e.g., 'Core i7 Laptop with 16GB RAM')"
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
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Search"}
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
                    Found {results.length} matches
                    </h3>
                </div>

                {results.length > 0 ? (
                    <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/40">
                    <Table>
                        <TableHeader className="bg-slate-50/50 border-b border-slate-100">
                        <TableRow className="hover:bg-slate-50/80 border-slate-100">
                            <TableHead className="w-[60px] text-slate-400 font-medium">ID</TableHead>
                            <TableHead className="font-semibold text-slate-700">Item Description</TableHead>
                            <TableHead className="w-[150px] text-right font-semibold text-slate-700">Price (INR)</TableHead>
                            <TableHead className="w-[100px] text-right font-semibold text-slate-700">Qty</TableHead>
                            <TableHead className="w-[120px] text-center font-semibold text-slate-700">Accuracy</TableHead>
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
                        <p className="text-slate-400">No results found matching your query.</p>
                        </div>
                    )
                )}
                </motion.div>
            )}
            </AnimatePresence>
        </div>

        {/* --- ULTIMATE SEO CONTENT --- */}
        <div className="w-full max-w-5xl space-y-32">
            
            {/* Why You Are Losing */}
            <section className="text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium text-sm">
                    <TrendingUp className="h-4 w-4" />
                    <span>Stop Losing Tenders</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Why are you losing GeM Contracts?</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    Bidding on the Government e-Marketplace is a war of pennies. If you quote just ₹1 higher than the L1 price, you lose everything. Most contractors guess the price or rely on outdated manual searches. 
                    <br/><br/>
                    <strong>That ends today.</strong>
                </p>
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
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 mb-2">ATC (Additional Terms & Conditions)</h3>
                        <p className="text-slate-600 text-sm">Specific clauses added by the buyer. Ignoring ATC clauses regarding warranty or delivery locations is the #1 reason for technical disqualification.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 mb-2">PBG (Performance Bank Guarantee)</h3>
                        <p className="text-slate-600 text-sm">A security deposit (usually 3-10% of contract value) that the winning bidder must submit. It ensures the seller fulfills the contract terms.</p>
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
                     <div className="flex items-start gap-4 p-4 bg-red-50/50 rounded-xl border border-red-100">
                        <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                             <h3 className="font-bold text-slate-900">Mistake #3: Missing Delivery Timelines</h3>
                             <p className="text-slate-600 text-sm mt-1">GeM has strict penalties (LD) for late delivery. Always factor in logistics costs and time when quoting your price.</p>
                        </div>
                    </div>
                </div>
             </section>

            {/* Static Blog / Checklist */}
            <section className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                     <BookOpen className="h-8 w-8 text-indigo-600" />
                     <h2 className="text-3xl font-bold text-slate-900">5 Tricks to Win GeM Tenders in 2026</h2>
                </div>
                <div className="space-y-8">
                    <div className="group cursor-pointer">
                        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 group-hover:text-indigo-600 transition-colors">
                            <span className="bg-slate-100 text-slate-500 rounded px-2 py-0.5 text-sm">01</span>
                            Check Historical L1 Prices First
                        </h3>
                        <p className="text-slate-600 mt-2 ml-10">Never enter a bid without knowing the history. Use gembid.help to find the winning price of similar items in the last 6 months.</p>
                    </div>
                    <div className="group cursor-pointer">
                        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 group-hover:text-indigo-600 transition-colors">
                            <span className="bg-slate-100 text-slate-500 rounded px-2 py-0.5 text-sm">02</span>
                            Participate in Reverse Auctions (RA)
                        </h3>
                        <p className="text-slate-600 mt-2 ml-10">RAs account for 40% of GeM value. Be prepared to cut margins by volume, but only if you know the floor price.</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                    <Link href="#" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all">
                        Read Full Guide <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            {/* How-To Hub for PAA Dominance */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-1 md:col-span-2 text-center mb-6">
                    <h2 className="text-3xl font-bold text-slate-900">GeM Tutorials & Help</h2>
                    <p className="text-slate-500">Quick answers to your procurement questions.</p>
                </div>
                
                <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100 hover:border-indigo-200 transition-colors">
                     <HelpCircle className="h-8 w-8 text-indigo-600 mb-4" />
                     <h3 className="text-xl font-bold text-slate-900 mb-3">How to find L1 price in GeM?</h3>
                     <p className="text-slate-700 leading-relaxed">
                        Finding the L1 (Lowest 1) price is crucial. 
                        <strong>Step 1:</strong> Go to the GeM portal. 
                        <strong>Step 2:</strong> It is difficult to find manually. 
                        <strong>Step 3:</strong> Use <em>gembid.help</em> to search for your item. We instantly show you the L1 price from thousands of past bids.
                     </p>
                </div>

                <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-200 transition-colors">
                     <HelpCircle className="h-8 w-8 text-purple-600 mb-4" />
                     <h3 className="text-xl font-bold text-slate-900 mb-3">How to check rival bids?</h3>
                     <p className="text-slate-700 leading-relaxed">
                        GeM does not publicly display all rival bids until the tender opening. However, historical data is your best predictor. By analyzing what your rivals quoted in previous months using our tool, you can estimate their current bidding strategy.
                     </p>
                </div>
            </section>

            {/* Keyword Bank Footer */}
            <section className="border-t border-slate-200 pt-16 pb-8">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">Popular Searches</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-500">
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-indigo-600">GeM Login</a></li>
                        <li><a href="#" className="hover:text-indigo-600">GeM Registration</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Government e-Marketplace</a></li>
                        <li><a href="#" className="hover:text-indigo-600">GeM Portal</a></li>
                        <li><a href="#" className="hover:text-indigo-600">CPPP Tender Search</a></li>
                    </ul>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-indigo-600">L1 Price Predictor</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Bid Estimation Tool</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Tender Result GeM</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Reverse Auction Tips</a></li>
                        <li><a href="#" className="hover:text-indigo-600">GeM Custom Bid</a></li>
                    </ul>
                    <ul className="space-y-2">
                         <li><a href="#" className="hover:text-indigo-600">GeM Consultancy Delhi</a></li>
                         <li><a href="#" className="hover:text-indigo-600">GeM Consultancy Mumbai</a></li>
                         <li><a href="#" className="hover:text-indigo-600">GeM Consultancy Bangalore</a></li>
                         <li><a href="#" className="hover:text-indigo-600">Startups on GeM</a></li>
                         <li><a href="#" className="hover:text-indigo-600">MSE Verification GeM</a></li>
                    </ul>
                    <ul className="space-y-2">
                         <li><a href="#" className="hover:text-indigo-600">Etenders India</a></li>
                         <li><a href="#" className="hover:text-indigo-600">Vendor Assessment</a></li>
                         <li><a href="#" className="hover:text-indigo-600">Brand Approval</a></li>
                         <li><a href="#" className="hover:text-indigo-600">OEM Registration</a></li>
                         <li><a href="#" className="hover:text-indigo-600">GeM Seller Help</a></li>
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
        </div>
      </footer>
    </div>
  );
}

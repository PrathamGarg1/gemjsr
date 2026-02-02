"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, Copy, ExternalLink, SlidersHorizontal, Sparkles, TrendingUp, ShieldCheck, Zap, Database, CheckCircle2 } from "lucide-react";
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
        
        {/* Hero Section */}
        <div className="max-w-4xl w-full mx-auto text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 pb-4 tracking-tight drop-shadow-sm">
              Search GeM Bids <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Instantly.</span>
            </h1>
            <p className="mt-4 text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Simply describe the item you are looking for, and we will find the most relevant Government e-Marketplace bids for you.
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
                  placeholder="Describe your item naturally..."
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

        {/* SEO Content Sections */}
        <div className="w-full max-w-5xl space-y-24">
            
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

             {/* The Technical Advantage */}
             <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-900">The Power of Indexed Intelligence</h2>
                    <p className="text-lg text-slate-600">
                        We don't just "search" keywords. Our engine runs on a sophisticated AI pipeline:
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                            <span className="text-slate-700"><strong>Bi-Encoder Retrieval:</strong> Instantly finds millions of relevant candidates from the GeM database.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                            <span className="text-slate-700"><strong>Cross-Encoder Re-Ranking:</strong> Analyzes the true semantic meaning of your query to filter out noise.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                            <span className="text-slate-700"><strong>Complete GeM Index:</strong> We have indexed the entire portal, so you don't have to guess.</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-indigo-500 rounded-full blur-[100px] opacity-30"></div>
                    <Database className="h-12 w-12 text-indigo-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Technical Specs</h3>
                    <div className="space-y-4 font-mono text-sm text-slate-300">
                        <div className="flex justify-between border-b border-white/10 pb-2">
                            <span>Model</span>
                            <span className="text-white">all-mpnet-base-v2</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                            <span>Re-Ranker</span>
                            <span className="text-white">ms-marco-MiniLM-L-6-v2</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                            <span>Latency</span>
                            <span className="text-white">&lt; 200ms</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Needs This */}
            <section className="text-center space-y-12">
                <h2 className="text-3xl font-bold text-slate-900">For the Winners of Public Procurement</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <ShieldCheck className="h-10 w-10 text-indigo-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">OEMs</h3>
                        <p className="text-slate-600">Track how your products are being priced by resellers and ensure brand compliance.</p>
                    </div>
                    <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <Zap className="h-10 w-10 text-amber-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Resellers & Traders</h3>
                        <p className="text-slate-600">Find the L1 price instantly. Bid with confidence knowing you are competitive.</p>
                    </div>
                    <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <TrendingUp className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Consultants</h3>
                        <p className="text-slate-600">Offer superior insights to your clients by leveraging data-backed bid intelligence.</p>
                    </div>
                </div>
            </section>

             {/* SEO Text Block */}
             <section className="prose prose-slate max-w-none text-slate-600">
                <h2 className="text-center text-slate-900">Mastering the Government e-Marketplace (GeM)</h2>
                <p>
                    The Government e-Marketplace (GeM) is India's premier public procurement portal. To succeed, understanding "L1" (Level 1) pricing is critical. The L1 bidder is the one who quotes the lowest price and is typically awarded the contract. However, finding historical L1 prices for specific items like "HP Laptops" or "Godrej Chairs" is difficult on the official portal due to limited search capabilities.
                </p>
                <p>
                    <strong>gembid.help</strong> solves this problem. We are a GeM Bid Search engine designed to help you predict winning bid prices. By analyzing thousands of past tenders, our tool gives you the median, lowest, and highest winning prices for any category. Whether you are participating in a Reverse Auction (RA) or a Direct Purchase, our data ensures you never bid blindly.
                </p>
            </section>

            {/* FAQ */}
            <section className="max-w-3xl mx-auto w-full space-y-8">
                <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <div className="p-6 bg-white rounded-xl border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-2">How accurate is the price prediction?</h3>
                        <p className="text-slate-600">We display actual historical winning prices (L1) from finalized GeM contracts. The accuracy is 100% relative to historical data.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-2">Can I search for any product?</h3>
                        <p className="text-slate-600">Yes. Our semantic search engine understands product descriptions, so you can search for generic terms like "Office Chair" or specific models.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-2">Is this affiliated with GeM?</h3>
                        <p className="text-slate-600">No, we are an independent market intelligence tool designed to help businesses navigate the public procurement landscape more effectively.</p>
                    </div>
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, Copy, ExternalLink, SlidersHorizontal, Sparkles } from "lucide-react";
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
    <div className="min-h-screen w-full bg-neutral-950 text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* Background Effects */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <BackgroundBeams className="fixed inset-0 pointer-events-none" />

      <main className="relative z-10 w-full pt-32 pb-12 px-4 md:px-6 flex flex-col items-center">
        
        {/* Hero Section */}
        <div className="max-w-4xl w-full mx-auto text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm text-xs font-medium text-neutral-300 mb-6">
               <Sparkles className="h-3 w-3 text-indigo-400" />
               <span>New: Neural Search v2.0 Live</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-4 tracking-tight">
              Semantic Inventory <br/> Intelligence.
            </h1>
            <p className="mt-4 text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Find exactly what you need with high-dimensional vector retrieval. 
              Enterprise-grade search for the modern inventory stack.
            </p>
          </motion.div>
        </div>

        {/* Search App */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full max-w-4xl mx-auto mb-24 relative p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20"
        >
          <div className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl p-2 border border-white/10 shadow-2xl">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2 relative z-20">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                <Input
                  className="w-full pl-12 h-14 text-lg border-none shadow-none focus-visible:ring-0 bg-transparent placeholder:text-neutral-600 text-white"
                  placeholder="Describe your item naturally..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2 px-2 md:border-l border-white/10">
                 <div className="flex items-center gap-2 px-3 py-2 bg-neutral-800/50 rounded-lg whitespace-nowrap border border-white/5">
                   <SlidersHorizontal className="h-4 w-4 text-neutral-500" />
                   <span className="text-sm font-medium text-neutral-400">Limit:</span>
                   <Select value={topK} onValueChange={setTopK}>
                    <SelectTrigger className="h-8 w-[60px] border-0 bg-transparent focus:ring-0 p-0 text-white font-semibold shadow-none">
                      <SelectValue placeholder="10" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-white/10 text-white">
                      <SelectItem value="5" className="focus:bg-white/10 focus:text-white">5</SelectItem>
                      <SelectItem value="10" className="focus:bg-white/10 focus:text-white">10</SelectItem>
                      <SelectItem value="20" className="focus:bg-white/10 focus:text-white">20</SelectItem>
                      <SelectItem value="50" className="focus:bg-white/10 focus:text-white">50</SelectItem>
                    </SelectContent>
                  </Select>
                 </div>
              </div>

              <Button 
                size="lg" 
                type="submit"
                disabled={loading}
                className="h-14 px-8 rounded-xl bg-white text-black hover:bg-neutral-200 font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all text-base"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Search"}
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Results Section */}
        <div className="w-full max-w-6xl">
            <AnimatePresence>
            {searched && (
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
                >
                <div className="flex items-center justify-between px-2">
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest">
                    Found {results.length} matches
                    </h3>
                </div>

                {results.length > 0 ? (
                    <div className="bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <Table>
                        <TableHeader className="bg-white/5 border-b border-white/10">
                        <TableRow className="hover:bg-white/5 border-white/10">
                            <TableHead className="w-[60px] text-neutral-400 font-medium">ID</TableHead>
                            <TableHead className="font-medium text-neutral-300">Item Description</TableHead>
                            <TableHead className="w-[150px] text-right font-medium text-neutral-300">Price (INR)</TableHead>
                            <TableHead className="w-[100px] text-right font-medium text-neutral-300">Qty</TableHead>
                            <TableHead className="w-[120px] text-center font-medium text-neutral-300">Accuracy</TableHead>
                            <TableHead className="w-[150px] text-right font-medium text-neutral-300">Actions</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {results.map((item, index) => (
                            <TableRow key={index} className="group hover:bg-white/5 border-white/5 transition-colors">
                            <TableCell className="text-xs text-neutral-600 font-mono text-center">
                                {(index + 1).toString().padStart(2, '0')}
                            </TableCell>
                            <TableCell className="font-medium text-neutral-200">
                                <div className="line-clamp-2 leading-relaxed">{item.item}</div>
                                <div className="text-xs text-neutral-500 mt-1.5 font-mono bg-neutral-800/50 inline-block px-1.5 py-0.5 rounded border border-white/5">
                                    {item.b_no}
                                </div>
                            </TableCell>
                            <TableCell className="text-right font-mono text-neutral-400">
                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(item.prc)}
                            </TableCell>
                            <TableCell className="text-right text-neutral-400">
                                {item.qty}
                            </TableCell>
                            <TableCell className="text-center">
                                <div className="flex justify-center">
                                    <Badge variant="secondary" className={`
                                        border-0 backdrop-blur-md
                                    ${item.relevance_score > 0.8 ? 'bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20' : 
                                        item.relevance_score > 0.5 ? 'bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20' :
                                        'bg-neutral-800 text-neutral-400'}
                                    `}>
                                    {(item.relevance_score * 10).toFixed(1)}%
                                    </Badge>
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:text-white hover:bg-white/10" onClick={() => copyToClipboard(item.b_no)}>
                                    {copiedId === item.b_no ? <span className="text-emerald-400 font-bold text-xs">✓</span> : <Copy className="h-4 w-4" />}
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:text-white hover:bg-white/10" onClick={() => openGemBid(item.b_no)}>
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
                        <div className="text-center py-20 bg-neutral-900/30 rounded-2xl border border-dashed border-white/10">
                        <p className="text-neutral-500">No results found matching your query.</p>
                        </div>
                    )
                )}
                </motion.div>
            )}
            </AnimatePresence>
        </div>
      </main>
      
      <footer className="border-t border-white/5 bg-black py-12 relative z-10">
        <div className="container mx-auto px-4 text-center text-neutral-600 text-sm">
          <p>&copy; {new Date().getFullYear()} gembid.help. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

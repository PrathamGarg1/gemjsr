"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, Copy, ExternalLink, SlidersHorizontal } from "lucide-react";
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
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ResultItem {
  item: string;
  qty: number;
  prc: number;
  relevance_score: number;
  c_no: string;
  b_no: string;
}

export function SearchApp() {
  const [query, setQuery] = useState("");
  const [topK, setTopK] = useState("10");
  const [results, setResults] = useState<ResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);
  
  const loadingTexts = [
    "Indexing 10M+ Tenders from GeM Portal...",
    "Analyzing Competitor Bids & L1 History...",
    "Calculating Probability of Winning...",
    "Generative AI preparing insights...",
    "Finalizing Results..."
  ];

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % loadingTexts.length);
      }, 1200);
      return () => clearInterval(interval);
    } else {
      setLoadingStep(0);
    }
  }, [loading]);

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
    <>
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-[-70px] w-full max-w-4xl mx-auto mb-24 relative rounded-3xl border border-slate-100 p-2 bg-white/5"
        >
           <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
          <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-2 border border-slate-50 shadow-sm">
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

        {/* Premium Loader Overlay */}
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="w-full max-w-2xl mx-auto mb-16 text-center"
                >
                    <div className="relative w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-6">
                        <motion.div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            style={{ width: "50%" }}
                        />
                    </div>
                    <motion.div
                        key={loadingStep}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
                    >
                        {loadingTexts[loadingStep]}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

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
                            <TableHead className="font-semibold text-slate-700">Contract / Bid No.</TableHead>
                            <TableHead className="w-[150px] text-right font-semibold text-slate-700">Winning Price</TableHead>
                            <TableHead className="w-[80px] text-right font-semibold text-slate-700">Qty</TableHead>
                            <TableHead className="w-[100px] text-center font-semibold text-slate-700">Match</TableHead>
                            <TableHead className="w-[100px] text-right font-semibold text-slate-700">Actions</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {results.map((item, index) => (
                            <TableRow key={index} className="group hover:bg-slate-50/80 border-slate-100 transition-colors">
                            <TableCell className="text-xs text-slate-400 font-mono text-center">
                                {(index + 1).toString().padStart(2, '0')}
                            </TableCell>
                            <TableCell className="font-medium text-slate-700 max-w-[200px] truncate" title={item.item}>
                                {item.item}
                            </TableCell>
                            <TableCell>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-1">
                                        <Badge variant="outline" className="font-mono text-[10px] text-slate-500 bg-slate-50 px-1 py-0 h-5">
                                            BID
                                        </Badge>
                                        <span className="text-xs font-mono text-slate-600 select-all cursor-pointer hover:text-indigo-600" onClick={() => copyToClipboard(item.b_no)}>
                                            {item.b_no}
                                        </span>
                                    </div>
                                    {item.c_no && item.c_no !== "N/A" && (
                                         <div className="flex items-center gap-1">
                                            <Badge variant="outline" className="font-mono text-[10px] text-sky-600 bg-sky-50 border-sky-200 px-1 py-0 h-5">
                                                CON
                                            </Badge>
                                            <a 
                                                href="https://gem.gov.in/view_contracts" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                onClick={(e) => {
                                                    // Optional: Copy on click but let the link open
                                                    navigator.clipboard.writeText(item.c_no);
                                                    e.stopPropagation();
                                                }}
                                                className="text-xs font-mono text-sky-600 hover:underline select-all"
                                                title="Click to open GeM (Copy ID first)"
                                            >
                                                {item.c_no}
                                            </a>
                                         </div>
                                    )}
                                </div>
                            </TableCell>
                            <TableCell className="text-right font-mono text-slate-600">
                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(item.prc)}
                            </TableCell>
                            <TableCell className="text-right text-slate-600 text-xs">
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
    </>
  );
}

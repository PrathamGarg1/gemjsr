"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, ArrowRight, Copy, ExternalLink, SlidersHorizontal } from "lucide-react";
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
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-slate-100 dark:selection:bg-slate-800">
      <Navbar />

      <main className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-6">
              Semantic Inventory Intelligence
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Enterprise-grade neural search for your inventory data. 
              Find exactly what you need with high-dimensional vector retrieval.
            </p>
          </motion.div>
        </div>

        {/* Search App */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_8px_40px_rgba(0,0,0,0.05)] p-2">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  className="w-full pl-12 h-14 text-lg border-0 shadow-none focus-visible:ring-0 bg-transparent placeholder:text-slate-400"
                  placeholder="Search inventory..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2 px-2 md:border-l border-slate-100 dark:border-slate-800">
                 <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg whitespace-nowrap">
                   <SlidersHorizontal className="h-4 w-4 text-slate-400" />
                   <span className="text-sm font-medium text-slate-500">Results:</span>
                   <Select value={topK} onValueChange={setTopK}>
                    <SelectTrigger className="h-8 w-[70px] border-0 bg-transparent focus:ring-0 p-0 text-slate-900 dark:text-slate-50 font-semibold shadow-none">
                      <SelectValue placeholder="10" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                 </div>
              </div>

              <Button 
                size="lg" 
                type="submit"
                disabled={loading}
                className="h-14 px-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-sm transition-all text-base"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Search"}
              </Button>
            </form>
          </div>
        </div>

        {/* Results Section */}
        <AnimatePresence>
          {searched && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  Found {results.length} results
                </h3>
              </div>

              {results.length > 0 ? (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                  <Table>
                    <TableHeader className="bg-slate-50 dark:bg-slate-900">
                      <TableRow>
                        <TableHead className="w-[50px]"></TableHead>
                        <TableHead className="font-semibold text-slate-900 dark:text-slate-50">Item Description</TableHead>
                        <TableHead className="w-[150px] text-right font-semibold text-slate-900 dark:text-slate-50">Price (INR)</TableHead>
                        <TableHead className="w-[100px] text-right font-semibold text-slate-900 dark:text-slate-50">Qty</TableHead>
                        <TableHead className="w-[100px] text-center font-semibold text-slate-900 dark:text-slate-50">Score</TableHead>
                        <TableHead className="w-[180px] text-right font-semibold text-slate-900 dark:text-slate-50">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {results.map((item, index) => (
                        <TableRow key={index} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                          <TableCell className="text-xs text-slate-400 font-mono text-center">
                            {(index + 1).toString().padStart(2, '0')}
                          </TableCell>
                          <TableCell className="font-medium text-slate-700 dark:text-slate-200">
                            <div className="line-clamp-2">{item.item}</div>
                            <div className="text-xs text-slate-400 mt-1 font-mono">{item.b_no}</div>
                          </TableCell>
                          <TableCell className="text-right font-mono text-slate-600 dark:text-slate-300">
                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(item.prc)}
                          </TableCell>
                          <TableCell className="text-right text-slate-600 dark:text-slate-300">
                            {item.qty}
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge variant="secondary" className={`
                              ${item.relevance_score > 0.8 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 
                                item.relevance_score > 0.5 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                                'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'}
                            `}>
                              {(item.relevance_score * 10).toFixed(1)}%
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                             <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                               <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => copyToClipboard(item.b_no)}>
                                 {copiedId === item.b_no ? <span className="text-green-600 font-bold text-xs">✓</span> : <Copy className="h-4 w-4" />}
                               </Button>
                               <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openGemBid(item.b_no)}>
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
                    <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
                      <p className="text-slate-500 dark:text-slate-400">No results found matching your query.</p>
                    </div>
                 )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12">
        <div className="container mx-auto px-4 text-center text-slate-500 dark:text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} gembid.help. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

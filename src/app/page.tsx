"use client";

import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, Copy, ExternalLink, SlidersHorizontal, Sparkles, TrendingUp, ShieldCheck, Zap, Database, CheckCircle2, ChevronRight, BookOpen, HelpCircle, AlertTriangle, ArrowRight, History, Quote, User, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { GuaranteeForm } from "@/components/GuaranteeForm";
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
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ResultItem {
  item: string;
  qty: number;
  prc: number;
  relevance_score: number;
  c_no: string;
  b_no: string;
}

const analyticsData = [
  { name: 'Marine Fuels', value: 3359, color: '#4f46e5' },
  { name: 'Passenger Cars', value: 2018, color: '#8b5cf6' },
  { name: 'Desktop Computers', value: 1510, color: '#ec4899' },
  { name: 'Silicomanganese', value: 1173, color: '#06b6d4' },
  { name: 'Buses', value: 962, color: '#10b981' },
];

export default function Home() {
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
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden z-100">
      <Navbar />
      
      {/* Background Effects */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#4f46e5" />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      
      <div className="fixed inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-400 opacity-20 blur-[100px]"></div>

      <main className="relative z-10 w-full pt-32 pb-12 px-4 md:px-6 flex flex-col items-center">
        
        {/* BACKGROUND BEAMS - Pushed to back */}
        <BackgroundBeams className="absolute inset-0 z-0 opacity-50" />

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
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Our AI analyzes millions of GeM Tenders to predict the exact winning (L1) price at which you can win the BID and get the contract.
          <div className="flex justify-center gap-4 mt-">
            <div className="text-indigo-600 font-semibold hover:underline  text-xl">Simple.</div>
            <div className="text-indigo-600 font-semibold hover:underline text-xl">Free.</div>
            <div className="text-indigo-600 font-semibold hover:underline text-xl">Proven.</div>
          </div>
          </p>
        </div>

        {/* Search App */}
       
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
        
        <div 
            className="w-full my-16 py-[-20px] max-w-4xl mx-auto relative rounded-2xl bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-indigo-500/30 shadow-2xl shadow-indigo-500/20"
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
                                <img src="/assets/struggling_bidder.png" alt="Stressed Contractor" className="object-cover w-full h-full opacity-90 transition-opacity hover:opacity-100" />
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
                                <img src="/assets/happy_mobile_bidder.png" alt="Happy Contractor" className="object-cover w-full h-full transform transition-transform hover:scale-105 duration-700" />
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

        {/* --- ULTIMATE SEO CONTENT --- */}
        <div className="my-[-10rem] w-full max-w-5xl space-y-32 z-20 " >
            

             
             {/* TRUST GRID (PERSONAS) */}
             <section className="mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Every Government Bidder</h2>
                    <p className="text-xl text-slate-600">From construction sites to design studios, India's top professionals rely on us.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Persona 1: Construction */}
                    <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                        <img src="/assets/site_engineer.png" alt="Civil Engineer" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
                        <img src="/assets/female_architect.png" alt="Architect" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
                        <img src="/assets/sme_owner.png" alt="SME Owner" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
                        <img src="/assets/success_hero.png" alt="Successful Contractor" className="w-full h-full object-cover" />
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


               {/* MARKET INTELLIGENCE CHART */}
             <section className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50">
                 <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                     <div className="flex-1 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs uppercase tracking-wider">
                            <TrendingUp className="h-3 w-3" />
                            Market Intelligence
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Top Procurement Categories in FY 2025-26</h2>
                        <p className="text-slate-500 leading-relaxed">
                            Based on our analysis of over <strong>$4 Billion+</strong> in transaction volume. 
                            These sectors are seeing the highest government spending right now. 
                            Position your business to target these high-value opportunities.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                             <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-none">Marine Fuels</Badge>
                             <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-none">IT Hardware</Badge>
                             <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-none">Automotive</Badge>
                        </div>
                     </div>
                     <div className="w-full md:w-1/2 h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={analyticsData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                                <XAxis type="number" hide />
                                <YAxis 
                                    dataKey="name" 
                                    type="category" 
                                    width={100} 
                                    tick={{fontSize: 11, fill: '#64748b'}} 
                                    axisLine={false} 
                                    tickLine={false} 
                                />
                                <Tooltip 
                                    cursor={{fill: '#f8fafc'}}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
                                    {analyticsData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                     </div>
                 </div>
                 <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                    <Zap className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-slate-600">
                        <strong>Pro Tip:</strong> "Passenger Car" and "Desktop Computer" tenders often have low competition in specific districts. Use our search tool to filter by location (coming soon).
                    </p>
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

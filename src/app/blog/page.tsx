"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  const articles = [
    {
      slug: "how-to-win-gem-tenders",
      title: "How to Win GeM Tenders: The Ultimate Guide (2026)",
      excerpt: "Stop bidding blindly. Learn the exact L1 price prediction strategy that helps smart vendors win 4x more contracts on the Government e-Marketplace.",
      category: "Strategy",
      readTime: "8 min read",
      date: "Feb 3, 2026",
      featured: true
    },
    {
      slug: "#",
      title: "GeM Registration Fees & Hidden Charges Explained",
      excerpt: "Is GeM really free? We break down the caution money, vendor assessment fees, and transaction charges you need to know about.",
      category: "Registration",
      readTime: "5 min read",
      date: "Jan 28, 2026",
      featured: false
    },
    {
      slug: "#",
      title: "What is L1 Purchase vs Direct Purchase?",
      excerpt: "Understanding the procurement modes is key to getting orders. Here is the difference between Direct Purchase, L1, and Custom Bids.",
      category: "Education",
      readTime: "4 min read",
      date: "Jan 15, 2026",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 md:px-6 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-indigo-600 border-indigo-200 bg-indigo-50">
            Content Hub
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            GeM Tender Tips & <span className="text-indigo-600">bidding Secrets</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Expert insights, tutorials, and data-driven strategies to help you dominate the Government e-Marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col ${article.featured ? 'md:col-span-2 lg:col-span-2 md:flex-row' : ''}`}
                >
                    <div className={`bg-gradient-to-br from-indigo-500 to-purple-600 ${article.featured ? 'md:w-2/5 min-h-[250px]' : 'h-48'} flex items-center justify-center`}>
                        <BookOpen className="text-white h-12 w-12 opacity-80" />
                    </div>
                    <div className="p-8 flex flex-col justify-center flex-grow">
                        <div className="flex items-center gap-4 mb-4 text-xs font-medium text-slate-500">
                            <span className="text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">{article.category}</span>
                            <div className="flex items-center gap-1"><Clock className="h-3 w-3" /> {article.readTime}</div>
                            <div className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {article.date}</div>
                        </div>
                        <Link href={`/blog/${article.slug}`} className="block group-hover:text-indigo-600 transition-colors">
                            <h2 className={`${article.featured ? 'text-3xl' : 'text-xl'} font-bold text-slate-900 mb-3 leading-tight`}>
                                {article.title}
                            </h2>
                        </Link>
                        <p className="text-slate-600 mb-6 line-clamp-3">
                            {article.excerpt}
                        </p>
                        <Link href={`/blog/${article.slug}`} className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 mt-auto">
                            Read Article <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>
      </main>
    </div>
  );
}

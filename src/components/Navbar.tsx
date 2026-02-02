"use client";

import { Feather } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 p-1.5 rounded-lg group-hover:scale-105 transition-transform">
            <Feather className="h-5 w-5" />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-slate-50">
            gembid<span className="text-slate-400 dark:text-slate-500 font-normal">.help</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
          <Link href="#" className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors">
            Documentation
          </Link>
          <Link href="#" className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors">
            API
          </Link>
          <Link href="mailto:contact@gembid.help" className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors">
            Contact Sales
          </Link>
        </div>
      </div>
    </nav>
  );
}

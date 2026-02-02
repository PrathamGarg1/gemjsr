"use client";

import { Feather, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-md border-b border-gray-200/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white p-1.5 rounded-lg shadow-md hover:shadow-lg transition-all group-hover:scale-105">
            <Feather className="h-5 w-5" />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">
            gembid<span className="text-slate-400 font-normal">.help</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
           <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="#" className="hover:text-slate-900 transition-colors">
                Documentation
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">
                API
            </Link>
           </div>
           
           <div className="flex items-center gap-3">
             <Link href="https://github.com/PrathamGarg1/gemjsr" target="_blank">
                <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900 hover:bg-slate-100">
                    <Github className="h-5 w-5" />
                </Button>
             </Link>
             <Link href="mailto:contact@gembid.help">
                <Button className="bg-slate-900 text-white hover:bg-slate-800 font-semibold text-xs px-5 h-9 rounded-full shadow-lg shadow-slate-900/20">
                    Contact Sales
                </Button>
             </Link>
           </div>
        </div>
      </div>
    </nav>
  );
}

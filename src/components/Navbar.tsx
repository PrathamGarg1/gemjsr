"use client";

import { Feather, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-tr from-indigo-500 to-purple-500 text-white p-1.5 rounded-lg group-hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20">
            <Feather className="h-5 w-5" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">
            gembid<span className="text-white/40 font-normal">.help</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
           <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/60">
            <Link href="#" className="hover:text-white transition-colors">
                Documentation
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
                API
            </Link>
           </div>
           
           <div className="flex items-center gap-3">
             <Link href="https://github.com/PrathamGarg1/gemjsr" target="_blank">
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                    <Github className="h-5 w-5" />
                </Button>
             </Link>
             <Link href="mailto:contact@gembid.help">
                <Button className="bg-white text-black hover:bg-slate-200 font-semibold text-xs px-4 h-8 rounded-full">
                    Contact Sales
                </Button>
             </Link>
           </div>
        </div>
      </div>
    </nav>
  );
}

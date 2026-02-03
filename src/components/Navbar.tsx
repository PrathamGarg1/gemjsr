"use client";

import { Feather, Github, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";

import { GuaranteeForm } from "./GuaranteeForm";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-md border-b border-gray-200/50">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <span className="font-bold text-xl tracking-tight text-slate-900">
            gembid<span className="text-slate-400 font-normal">.help</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
           <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
           
           <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-indigo-600 transition-colors outline-none">
                  Resources <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-slate-100 shadow-xl p-2 rounded-xl w-48">
                  <DropdownMenuItem asChild className="focus:bg-indigo-50 cursor-pointer rounded-lg p-2">
                      <Link href="/playbook">The GeM Playbook</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="focus:bg-indigo-50 cursor-pointer rounded-lg p-2">
                       <Link href="/dictionary">GeM Dictionary</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="focus:bg-indigo-50 cursor-pointer rounded-lg p-2">
                      <Link href="/faq">FAQ & Help</Link>
                  </DropdownMenuItem>
              </DropdownMenuContent>
           </DropdownMenu>

           <Link href="/consultancy" className="hover:text-indigo-600 transition-colors">
               Consultancy
           </Link>
        </div>

        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3">
             <div className="hidden md:block">
                 <GuaranteeForm 
                    trigger={
                        <Button className="bg-slate-900 text-white hover:bg-slate-800 font-semibold text-xs px-5 h-9 rounded-full shadow-lg shadow-slate-900/20">
                            Secret Winning Strategy
                        </Button>
                    }
                 />
             </div>
             {/* Mobile Button - simplified text */}
             <div className="md:hidden">
                 <GuaranteeForm 
                    trigger={
                        <Button size="sm" className="bg-slate-900 text-white text-xs px-3 h-8 rounded-full">
                            Winning Strategy
                        </Button>
                    }
                 />
             </div>
           </div>
        </div>
      </div>
    </nav>
  );
}

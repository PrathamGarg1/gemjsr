"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-indigo-100 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            
            <span className="self-center text-2xl font-bold whitespace-nowrap text-slate-900 tracking-tight">
                gembid<span className="text-indigo-600">.help</span>
            </span>
        </Link>
      </div>
    </nav>
  );
}

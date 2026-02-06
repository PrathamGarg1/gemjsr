"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";

export function LeadCaptureForm() {
  const whatsappUrl = "https://wa.me/917719591107?text=Hi,%20I%20am%20interested%20in%20your%20Gem%20Consultancy%20service";

  return (
    <div className="w-full max-w-md mx-auto relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      
      <div className="relative p-8 bg-white rounded-xl shadow-xl text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
          </div>
          
          <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-2">
            Chat with an Expert
          </h3>
          <p className="text-slate-500 text-sm mb-8">
            Instant Reply on WhatsApp. No Forms.
          </p>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full h-16 text-xl font-bold bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg rounded-xl transform transition hover:scale-[1.02] active:scale-[0.98]"
          >
             <span>WhatsApp Us Now</span>
             <ArrowRight className="h-6 w-6" />
          </a>
          
          <p className="text-[10px] text-center text-slate-400 mt-4">
              Direct Line: +91 77195 91107
          </p>
      </div>
    </div>
  );
}

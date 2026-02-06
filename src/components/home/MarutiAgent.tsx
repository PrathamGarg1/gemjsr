"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
// import Image from "next/image"; // Avoiding Next Image for simple avatar to ensure no layout shift issues with sticky, or using standard img
import { MessageCircle, X } from "lucide-react";

export function MarutiAgent() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const messages = [
    "👋 Need help winning bids?",
    "⚡ Don't Bid Blindly!",
    "🚀 Get L1 Price Prediction",
    "📈 Increase Your Profit",
    "💬 I'm Online. Chat Now!"
  ];

  useEffect(() => {
    // Show after a slight delay
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Rotate messages every 4 seconds
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const whatsappUrl = "https://wa.me/917719591107?text=Hi,%20Maruti!%20I%20am%20interested%20in%20winning%20GeM%20Tenders.";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col items-end gap-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Chat Bubble Tooltip - Bouncing */}
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white px-4 py-3 rounded-2xl rounded-tr-none shadow-xl border border-slate-100 max-w-[200px] mb-2 relative"
          >
             <p className="text-sm font-bold text-slate-800">
                {messages[currentMessage]}
                <span className="block text-xs font-normal text-slate-500 mt-1">Agent Maruti is Online 🟢</span>
             </p>
             <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45 border-r border-b border-slate-100"></div>
          </motion.div>

          {/* Agent Button with Ring Animation */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-2xl border-4 border-white cursor-pointer"
          >
             {/* Pulsating Ring */}
             <div className="absolute inset-0 rounded-full border-4 border-emerald-400 animate-ping opacity-20"></div>

             <div className="relative w-full h-full rounded-full overflow-hidden bg-indigo-50 transform hover:scale-110 transition-transform duration-300">
                {/* Agent Image */}
                <img 
                    src="/assets/agent_maruti.png" 
                    alt="Maruti Agent" 
                    className="w-full h-full object-cover"
                />
             </div>
             
             {/* Online Dot - Always Blinking */}
             <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full animate-bounce"></div>

             {/* WhatsApp Icon Overlay (visible on hover) */}
             <div className="absolute inset-0 bg-emerald-500/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full z-10">
                <MessageCircle className="text-white h-8 w-8" />
             </div>
          </a>
          
          <div className="bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm opacity-60">
            Agent Maruti
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

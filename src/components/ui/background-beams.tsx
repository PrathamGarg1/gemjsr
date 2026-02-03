"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  // Configuration for 5 professional beams
  const beams = [
    { left: "10%", color: "via-indigo-500", delay: 0, duration: 8 },
    { left: "30%", color: "via-purple-500", delay: 2, duration: 11 },
    { left: "50%", color: "via-sky-500", delay: 4, duration: 13 },
    { left: "70%", color: "via-indigo-500", delay: 1, duration: 9 },
    { left: "90%", color: "via-purple-500", delay: 3, duration: 10 },
  ];

  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/50 via-slate-50/50 to-indigo-100/50"></div>
      
      {/* Grid Pattern with Data URI */}
      <div 
        className="absolute inset-0 bg-[length:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_90%)] opacity-20" 
        style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(99 102 241 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`
        }}
      />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           {beams.map((beam, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, height: "0%" }}
               animate={{ opacity: [0, 0.8, 0], height: ["0%", "150%"] }}
               transition={{
                 duration: beam.duration,
                 repeat: Infinity,
                 ease: "linear",
                 delay: beam.delay,
               }}
               className={cn(
                 "absolute top-0 w-[2px] bg-gradient-to-b from-transparent to-transparent blur-[3px]",
                 beam.color
               )}
               style={{ left: beam.left }}
             />
           ))}
           
           {/* Ambient Orbs - More Subtle & Professional */}
           <motion.div 
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                 duration: 10,
                 repeat: Infinity,
              }}
              className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] mix-blend-multiply"
           />

           <motion.div 
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                 duration: 12,
                 repeat: Infinity,
                 delay: 5
              }}
              className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] mix-blend-multiply"
           />
      </div>
    </div>
  );
};

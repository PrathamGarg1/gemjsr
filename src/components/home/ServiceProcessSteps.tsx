"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Book a FREE Session",
    desc: "We analyze your business possibilities and build a roadmap to your first GeM tender.",
    img: "/assets/step_1.png",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "You Relax Back",
    desc: "No more stress. We handle the paperwork, the registration, and the boring stuff.",
    img: "/assets/step_2.png",
    color: "bg-indigo-500"
  },
  {
    id: 3,
    title: "Continuous Monitoring",
    desc: "Our systems scan GeM 24/7. We match technical requirements to your profile instantly.",
    img: "/assets/step_3.png",
    color: "bg-emerald-500"
  },
  {
    id: 4,
    title: "Technical Shield (Guaranteed)",
    desc: "Our consultant verified team ensures you pass technical evaluations by sharing the EXACT certifications (ISO/BIS) you need.",
    img: "/assets/stepwo.png",
    color: "bg-purple-600"
  },
  {
    id: 5,
    title: "AI Price Prediction",
    desc: "Our proprietary AI predicts the Winning L1 Price to ensure you win with MAXIMUM PROFIT.",
    img: "/assets/step_4_v2.png",
    color: "bg-amber-500"
  },
  {
    id: 6,
    title: "You Enjoy Your Tender!",
    desc: "Win the bid. Execute the order. Watch your business grow.",
    img: "/assets/step_5.png",
    color: "bg-green-600"
  }
];

export function ServiceProcessSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"]
  });

  return (
    <div ref={containerRef} className="relative w-full py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            From <span className="text-indigo-600">Start</span> to <span className="text-emerald-600">Success</span>
        </h2>
        
        <div className="flex flex-col gap-24 relative">
            {/* Progress Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1.5 bg-slate-200 -translate-x-1/2 hidden md:block rounded-full overflow-hidden">
                <motion.div 
                    className="w-full bg-indigo-600 origin-top"
                    style={{ scaleY: scrollYProgress, height: "100%" }}
                />
            </div>

            {steps.map((step, index) => (
                <StepCard key={step.id} step={step} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

function StepCard({ step, index }: { step: typeof steps[0], index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
                "flex flex-col md:flex-row items-center gap-12 md:gap-32 relative z-10 w-full",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
            )}
        >
            {/* Text Side */}
            <div className={cn("flex-1 text-center md:text-left w-full", isEven ? "md:text-right" : "md:text-left")}>
                <div className="mb-4">
                    <span className={cn("text-5xl font-black text-slate-200 block", isEven ? "md:mr-auto" : "md:ml-auto")}>
                        0{step.id}
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    {step.desc}
                </p>
            </div>

            {/* Timeline Node - Minimalist */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-[3px] border-white hidden md:block shadow-md z-20"></div>

            {/* Image Side */}
            <div className="flex-1 w-full max-w-md">
                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-500/10 bg-white transform hover:scale-[1.02] transition-transform duration-500">
                    <Image 
                        src={step.img} 
                        alt={step.title} 
                        fill 
                        className="object-cover"
                    />
                </div>
            </div>
        </motion.div>
    )
}

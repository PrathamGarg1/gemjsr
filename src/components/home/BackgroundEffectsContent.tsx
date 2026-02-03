"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function BackgroundEffectsContent() {
  return (
    <>
      <Spotlight className="hidden md:block -top-40 left-0 md:left-60 md:-top-20" fill="#4f46e5" />
      <Spotlight className="hidden md:block h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      
      <div className="fixed inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-400 opacity-20 blur-[100px]"></div>

      {/* BACKGROUND BEAMS - Pushed to back */}
      <BackgroundBeams className="absolute inset-0 z-0 opacity-50 pointer-events-none" />
    </>
  );
}

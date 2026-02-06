
import { AlertTriangle, TrendingUp, Database, History, CheckCircle2, Award, BookOpen, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden z-100">
      
      {/* Background Effects */}

      <main className="relative z-10 w-full pt-32 pb-12 px-4 md:px-6 flex flex-col items-center">

        {/* Banner for Official Link */}
        <div className="w-full max-w-4xl mb-8 flex justify-center relative z-10">
             <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-md transition-all text-xs font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                #1 AI Tool for Government Tenders India
                {/* <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-slate-600" /> */}
             </a>
        </div>

        {/* Hero Section with USP Emphasis - High Z-Index ensuring visibility */}
        <div className="max-w-4xl w-full mx-auto text-center mb-16 relative z-10">
           
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Win <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">GeM Contracts</span> <br/>
            with L1 Price Prediction
          </h1>
          <div className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Our AI analyzes millions of GeM Tenders to predict the exact winning (L1) price at which you can win the BID and get the contract.
            <div className="flex justify-center gap-4 mt-4">
                <div className="text-indigo-600 font-semibold hover:underline  text-xl">Simple.</div>
                <div className="text-indigo-600 font-semibold hover:underline text-xl">Free.</div>
                <div className="text-indigo-600 font-semibold hover:underline text-xl">Proven.</div>
            </div>
          </div>
        </div>

        {/* Search App (Interactive Component) */}
        <SearchApp />
        

      </main>
      
      <footer className="border-t border-slate-100 bg-white py-12 relative z-10 w-full">
        <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
          <p className="mb-4">
            <span className="font-semibold text-slate-600">gembid.help</span> &bull; The #1 GeM Intelligence Tool
          </p>
          <p>&copy; {new Date().getFullYear()} gembid.help. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-300 hover:text-indigo-600">Official GeM Portal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
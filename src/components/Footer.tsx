import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">gembid<span className="text-indigo-500">.help</span></h3>
            <p className="text-sm leading-relaxed">
              India's #1 AI-powered GeM Intelligence Platform. We help contractors and OEMs predict L1 prices and win government tenders with data-driven precision.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">L1 Price Prediction</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Competitor Analysis</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">GeM Registration</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Brand Approval</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Vendor Assessment</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6">Resources</h4>
             <ul className="space-y-3 text-sm">
               <li><Link href="#" className="hover:text-indigo-400 transition-colors">GeM Handbook 2025</Link></li>
               <li><Link href="#" className="hover:text-indigo-400 transition-colors">Tender Bidding Guide</Link></li>
               <li><Link href="#" className="hover:text-indigo-400 transition-colors">Reverse Auction Tips</Link></li>
               <li><Link href="#" className="hover:text-indigo-400 transition-colors">Consultant Directory</Link></li>
               <li><Link href="#" className="hover:text-indigo-400 transition-colors">FAQ & Support</Link></li>
             </ul>
           </div>

           <div>
             <h4 className="text-white font-bold mb-6">Contact Us</h4>
             <ul className="space-y-3 text-sm">
               <li className="flex items-start gap-3">
                 <MapPin className="h-5 w-5 shrink-0 text-indigo-500" />
                 <span>123, Tech Park, Okhla Phase III, New Delhi - 110020</span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone className="h-5 w-5 shrink-0 text-indigo-500" />
                 <span>+91 98765 43210</span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="h-5 w-5 shrink-0 text-indigo-500" />
                 <span>support@gembid.help</span>
               </li>
             </ul>
           </div>
        </div>

        {/* SEO Keyword Bank (Low visibility but present) */}
        <div className="border-t border-slate-800 pt-8 pb-8">
            <h5 className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-4">Trending Searches</h5>
            <div className="flex flex-wrap gap-2 gap-y-3">
                {["GeM Portal Login", "GeM Registration Fees", "Government e-Marketplace Tenders", "L1 Bidder Meaning", "GeM Tender Search", "Manpower Outsourcing GeM", "Security Services Tender", "Housekeeping Services GeM", "Office Furniture GeM", "Laptop Tender Price", "GeM Customer Care", "GeM Seller Registration", "Startup India GeM", "MSE Purchase Preference", "GeM Invoice Generation", "GeM Caution Money Refund"].map((keyword, i) => (
                    <span key={i} className="text-[10px] text-slate-600 bg-slate-800/50 px-2 py-1 rounded hover:bg-slate-800 hover:text-slate-400 cursor-default transition-colors">
                        {keyword}
                    </span>
                ))}
            </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© 2025 gembid.help. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white text-slate-500">Privacy Policy</Link>
            <Link href="#" className="hover:text-white text-slate-500">Terms of Service</Link>
            <Link href="#" className="hover:text-white text-slate-500">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

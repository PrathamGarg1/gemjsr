import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { GuaranteeForm } from "./GuaranteeForm";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-bold text-2xl tracking-tight text-white">
                gembid<span className="text-indigo-400 font-normal">.help</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              #1 AI Tool for Government Tenders in India. We help SMEs and Startups win GeM contracts using L1 price prediction and competitor intelligence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links (Services) */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-indigo-400 transition-colors">L1 Price Prediction</Link></li>
              <li><Link href="/consultancy" className="hover:text-indigo-400 transition-colors">GeM Consultancy</Link></li>
              <li><Link href="/playbook" className="hover:text-indigo-400 transition-colors">GeM Registration Help</Link></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Tender Bidding Support</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Vendor Assessment</a></li>
            </ul>
          </div>

          {/* Resources (SEO Content) */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/playbook" className="hover:text-indigo-400 transition-colors">The GeM Playbook</Link></li>
              <li><Link href="/dictionary" className="hover:text-indigo-400 transition-colors">GeM Dictionary (A-Z)</Link></li>
              <li><Link href="/faq" className="hover:text-indigo-400 transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/blog" className="hover:text-indigo-400 transition-colors">Tender Tips Blog</Link></li>
              <li><Link href="/sitemap.xml" className="hover:text-indigo-400 transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Contact & Trust */}
          <div>
             <h3 className="font-semibold text-white mb-6 text-lg">Contact Us</h3>
             <ul className="space-y-4 text-sm text-slate-400">
               <li className="flex items-start gap-3">
                 <MapPin className="h-5 w-5 text-indigo-500 shrink-0" />
                 <span>IIT Ropar, Punjab, India - 140001</span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="h-5 w-5 text-indigo-500 shrink-0" />
                 <a href="mailto:gargprathamofficial@gmail.com" className="hover:text-white">gargprathamofficial@gmail.com</a>
               </li>
               <li className="flex items-center gap-3">
                 <GuaranteeForm
                trigger={
                    <Button className="bg-slate-900 text-white hover:bg-slate-800 font-semibold text-xs px-5 h-9 rounded-full shadow-lg shadow-slate-900/20">
                        Secret Winning Strategy
                    </Button>
                }
             />
               </li>
             </ul>
             <div className="mt-6 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium">
                    <ShieldCheck className="h-4 w-4" />
                    <span>100% Refund Guarantee Active</span>
                </div>
             </div>
          </div>
        </div>

        {/* SEO Keywords (Fat Footer Strategy) */}
        <div className="border-t border-slate-800 pt-8 mt-12">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Trending Searches</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
                <Link href="/dictionary" className="hover:text-slate-300 transition-colors">What is L1 in GeM?</Link>
                <Link href="/playbook" className="hover:text-slate-300 transition-colors">GeM Registration Fees</Link>
                <a href="#" className="hover:text-slate-300 transition-colors">Government Tenders India</a>
                <a href="#" className="hover:text-slate-300 transition-colors">CPPP Portal Login</a>
                <a href="#" className="hover:text-slate-300 transition-colors">GeM Bid Participation</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Tender Tiger Alternative</a>
                <a href="#" className="hover:text-slate-300 transition-colors">GeM 4.0 Training</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Direct Purchase Limit GeM</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Startup India GeM Benefits</a>
                <a href="#" className="hover:text-slate-300 transition-colors">MSME Tender Exemptions</a>
            </div>
            <div className="mt-8 text-center text-xs text-slate-600">
                &copy; {new Date().getFullYear()} gembid.help. All rights reserved. Not affiliated with the Government of India or GeM Portal directly.
            </div>
        </div>
      </div>
    </footer>
  );
}

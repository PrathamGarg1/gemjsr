"use client";

import { motion } from "framer-motion";
import { Book, Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const terms = [
  {
    term: "L1 (Level 1 Bidder)",
    definition: "The bidder who has quoted the lowest price in a tender. In government procurement, the contract is almost always awarded to the L1 bidder.",
    category: "Bidding"
  },
  {
    term: "EMD (Earnest Money Deposit)",
    definition: "A refundable security deposit (usually 2-5% of tender value) that a bidder must pay to demonstrate serious intent. If you withdraw your bid later, this amount is forfeited.",
    category: "Finance"
  },
  {
    term: "PBG (Performance Bank Guarantee)",
    definition: "A guarantee from a bank (usually 3-10% of contract value) submitted by the winning bidder to ensure they complete the work satisfactorily. It is returned after the warranty period.",
    category: "Finance"
  },
  {
    term: "BoQ (Bill of Quantities)",
    definition: "A comprehensive list of items, materials, and quantities required in a tender. Bidders must quote prices against each item in the BoQ.",
    category: "Tender"
  },
  {
    term: "ATC (Additional Terms & Conditions)",
    definition: "Specific clauses added by a buyer to a bid that go beyond general GeM terms. Bidders must agree to these to participate.",
    category: "Compliance"
  },
  {
    term: "RA (Reverse Auction)",
    definition: "A competitive bidding process where sellers lower their prices in real-time to beat competitors. The auction continues until no one is willing to bid lower.",
    category: "Bidding"
  },
  {
    term: "OEM (Original Equipment Manufacturer)",
    definition: "The company that originally manufactures a product. OEMs can sell directly on GeM or authorize resellers to sell their products.",
    category: "Registration"
  },
  {
    term: "GeM Sahay",
    definition: "A financing platform integrated with GeM where sellers can get instant loans against their purchase orders.",
    category: "Finance"
  },
  {
    term: "MSE (Micro & Small Enterprises)",
    definition: "Small businesses that get special preferences on GeM, such as exemption from EMD and turnover criteria (Purchase Preference Policy).",
    category: "Registration"
  },
  {
    term: "Caution Money",
    definition: "A deposit that sellers must keep in their GeM wallet to participate in bids. The amount depends on the seller's turnover.",
    category: "Finance"
  },
  {
    term: "Vendor Assessment",
    definition: "A verification process conducted by QCI (Quality Council of India) to certify an OEM's manufacturing capability.",
    category: "Registration"
  },
  {
    term: "Reseller Panel",
    definition: "A dashboard provided by OEMs on GeM where they can authorize specific resellers to sell their products.",
    category: "Registration"
  }
];

export default function DictionaryPage() {
  const [filter, setFilter] = useState("");

  const filteredTerms = terms.filter(t => 
    t.term.toLowerCase().includes(filter.toLowerCase()) || 
    t.definition.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 md:px-6 max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-none px-4 py-1">
             KNOWLEDGE BASE
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            GeM Portal Dictionary
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Confused by government jargon? Here is the ultimate glossary of GeM terms explained in simple English.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-16 relative">
             <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
             <Input 
                placeholder="Search for term (e.g., EMD, L1)..." 
                className="pl-12 h-12 rounded-full border-slate-200 shadow-sm focus:ring-2 focus:ring-indigo-500 text-base"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
             />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTerms.map((item, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-indigo-200 group"
                >
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-xl text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {item.term}
                        </h3>
                        <Badge variant="outline" className="text-xs text-slate-500 border-slate-200">
                            {item.category}
                        </Badge>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        {item.definition}
                    </p>
                </motion.div>
            ))}
        </div>

        {filteredTerms.length === 0 && (
            <div className="text-center py-20 text-slate-400">
                No terms found matching "{filter}".
            </div>
        )}

        {/* JSON-LD for DefinedTerm Schema */}
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            "name": "GeM Portal Glossary",
            "hasDefinedTerm": terms.map(t => ({
                "@type": "DefinedTerm",
                "name": t.term,
                "description": t.definition
            }))
          })
        }}
      />
      </main>
    </div>
  );
}

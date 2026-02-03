"use client";

import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is registration on GeM portal free?",
    answer: "Yes, creating a seller or buyer account on GeM is completely free. However, if your turnover exceeds a certain limit, you may need to deposit 'Caution Money' in your GeM wallet to participate in bids."
  },
  {
    question: "How much does GeM charge on orders?",
    answer: "GeM charges a transaction fee from sellers only on order values exceeding ₹5 Lakhs. The fee ranges from 0.5% decreasing to 0.05% for very large orders. There is no fee on orders below ₹5 Lakhs."
  },
  {
    question: "Is 'Country of Origin' mandatory on GeM?",
    answer: "Yes, it is mandatory for all sellers to declare the 'Country of Origin' for products listed on GeM to promote the 'Make in India' initiative."
  },
  {
    question: "Can I sell services on GeM?",
    answer: "Absolutely. GeM has a dedicated services section where you can offer Manpower outsourcing, Cab hiring, Security services, Cloud services, and many more."
  },
  {
    question: "What is L1 in GeM bidding?",
    answer: "L1 stands for 'Level 1' or the Lowest Bidder. In government contracts, the system automatically identifies the seller who offered the lowest price as L1, and usually, they are awarded the contract."
  },
  {
    question: "Do I need a Digital Signature Certificate (DSC)?",
    answer: "Yes, a Class 3 Digital Signature Certificate (DSC) is mandatory for participating in bids and signing invoices on the GeM portal."
  },
  {
    question: "How can I see who won a previous tender?",
    answer: "GeM makes this data public but it's hard to find. You can use our 'gembid.help' search tool to instantly find winning prices and competitor details for any past tender."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 md:px-6 max-w-3xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-6">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600">
            Answers to the most common questions about the Government e-Marketplace.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b-slate-100 last:border-0 px-2">
                        <AccordionTrigger className="text-left font-semibold text-lg text-slate-800 hover:text-indigo-600 py-6">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>

        {/* JSON-LD for FAQPage Schema */}
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.answer
                }
            }))
          })
        }}
      />
      </main>
    </div>
  );
}

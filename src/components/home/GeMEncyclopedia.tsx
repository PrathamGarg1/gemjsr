import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export function GeMEncyclopedia() {
  const categories = [
    {
      title: "GeM Services & Consultancy",
      keywords: ["GeM Portal Consultant", "GeM Registration Services", "Government e-Marketplace Agency", "GeM Vendor Assessment", "GeM Brand Approval", "GeM OEM Authorization", "Catalog Management Services", "L1 Price Prediction Tool"]
    },
    {
      title: "Tender Categories (High Volume)",
      keywords: ["Manpower Outsourcing Tenders", "Security Services Tenders", "Office Furniture Tenders", "Laptop & Computer Procurement", "Housekeeping Services", "Cloud Services Procurement", "Vehicle Hiring Tenders", "Medical Equipment Tenders"]
    },
    {
        title: "Bidding & Documentation",
        keywords: ["GeM Bid Participation", "Tender Documentation Support", "GeM Reverse Auction Strategy", "Custom Bid Participation", "BOQ Bids", "Direct Purchase Limit", "L1 Purchase Preference", "MSE & Startup Exemption"]
    }
  ];

  return (
    <section className="w-full py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 border-indigo-200 bg-indigo-50 text-indigo-700">GeM Knowledge Hub</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything You Need to Know About GeM</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
                Explore our comprehensive guide to the Government e-Marketplace. From registration to winning your first L1 tender, we cover every aspect of public procurement in India.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
                 <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-indigo-600 rounded-full"></span>
                    Popular Searches
                 </h3>
                 <div className="flex flex-wrap gap-2">
                    {categories.flatMap(c => c.keywords).map((k, i) => (
                        <span key={i} className="text-xs font-medium px-3 py-1.5 bg-slate-50 text-slate-600 rounded-full border border-slate-100 hover:border-indigo-200 hover:text-indigo-600 transition-colors cursor-pointer">
                            {k}
                        </span>
                    ))}
                 </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Expert Insights</h3>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-slate-700 font-semibold">What is L1 in GeM?</AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                        L1 stands for "Lowest One". It refers to the bidder who quotes the lowest price in a tender. On the GeM Portal, usually, the contract is awarded to the L1 bidder, provided they meet all technical qualifications (Golden Parameters).
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-slate-700 font-semibold">How to win GeM Tenders?</AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                        Winning requires a mix of Technical Compliance and Strategic Pricing. You must match the "Golden Parameters" of the bid perfectly. Then, use tools like gembid.help to predict the L1 price of competitors and bid slightly lower to maximize your margin while still winning.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-3">
                        <AccordionTrigger className="text-slate-700 font-semibold">Do I need a GeM Consultant?</AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                        While not mandatory, a GeM Consultant or Agency can significantly increase your win rate. They handle complex documentation, catalog rejection issues, OEM panels, and daily tender monitoring, allowing you to focus on execution.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>

        {/* Semantic SEO Paragraphs - Hidden from main visual flow but visible to crawlers */}
        <div className="prose prose-sm max-w-none text-slate-400 text-xs text-justify">
            <p>
                <strong>Government e-Marketplace (GeM) Services India:</strong> We provide a full suite of services for sellers on the GeM Portal. As a leading <em>GeM Consultant Agency</em>, we assist with GeM Registration, Vendor Assessment, and Brand Approval. Our proprietary <em>L1 Price Prediction Tool</em> uses AI to analyze millions of contracts, giving you the winning edge.
            </p>
            <p className="mt-2">
                <strong>Tender Bidding Support:</strong> Whether it is a Custom Bid, BOQ Bid, or Bunch Bid, our team ensures your technical documents are error-free. We specialize in categories like <em>Manpower Outsourcing</em>, <em>Office Furniture</em>, <em>Computers & Laptops</em>, and <em>Security Surveillance</em>. Stop navigating the complex GeM portal alone and partner with India's most data-driven GeM consultancy.
            </p>
        </div>
      </div>
    </section>
  );
}

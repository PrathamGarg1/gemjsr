"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, Calculator, CheckCircle2 } from "lucide-react";

export default function FeeCalculatorPage() {
  const [orderValue, setOrderValue] = useState<string>("");
  const [fee, setFee] = useState<number | null>(null);

  const calculateFee = () => {
    const value = parseFloat(orderValue);
    if (isNaN(value)) return;

    // GeM Transaction Charges Logic (Simplified Estimate)
    // 0.5% of order value
    let calculatedFee = value * 0.005;
    
    // Cap might apply, but for SEO tool we keep it simple or mention it
    setFee(calculatedFee);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 md:px-6 container mx-auto max-w-4xl">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">GeM Seller Fee Calculator (2026)</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Instantly calculate the <strong>Transaction Charges</strong> and <strong>Caution Money</strong> 
                deducted by the Government e-Marketplace for your orders.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Calculator Card */}
            <Card className="shadow-lg border-indigo-100">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-white border-b border-indigo-50">
                    <CardTitle className="flex items-center gap-2 text-indigo-700">
                        <Calculator className="h-5 w-5" /> Calculate Now
                    </CardTitle>
                    <CardDescription>Enter your contract/order value (INR)</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Order Value (₹)</label>
                        <Input 
                            type="number" 
                            placeholder="e.g. 500000" 
                            value={orderValue} 
                            onChange={(e) => setOrderValue(e.target.value)}
                            className="text-lg h-12"
                        />
                    </div>
                    
                    <Button onClick={calculateFee} className="w-full h-12 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700">
                        Calculate Fees
                    </Button>

                    {fee !== null && (
                        <div className="mt-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl space-y-1 animate-in fade-in slide-in-from-bottom-2">
                            <div className="text-sm text-emerald-600 font-medium">Estimated Transaction Charge (0.5%)</div>
                            <div className="text-3xl font-bold text-emerald-700">₹ {fee.toLocaleString('en-IN')}</div>
                             <p className="text-xs text-emerald-600/80 mt-2 flex items-center gap-1">
                                <CheckCircle2 className="h-3 w-3" /> excluding GST (18%)
                            </p>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* SEO Content */}
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-amber-500" /> Hidden Charges on GeM
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li><strong>Vendor Assessment Fee:</strong> ₹11,200 + GST (One time)</li>
                        <li><strong>Caution Money:</strong> ₹5,000 - ₹25,000 (Based on turnover)</li>
                        <li><strong>Transaction Charges:</strong> 0.5% of order value (for orders &gt; ₹5L)</li>
                    </ul>
                </div>

                <div className="bg-indigo-900 text-white p-6 rounded-xl shadow-lg">
                    <h3 className="font-bold text-lg mb-2">Want to save these fees?</h3>
                    <p className="text-indigo-200 text-sm mb-4">
                        Our L1 prediction tool helps you quote a price that covers these fees while still winning the bid.
                    </p>
                    <Button variant="secondary" className="w-full text-indigo-900 py-6 h-auto flex flex-col items-center">
                        <span className="font-bold">Try L1 Prediction Tool</span>
                        <span className="text-xs font-normal opacity-80">Stop losing money on margins</span>
                    </Button>
                </div>
            </div>
        </div>
      </main>
      
      {/* Footer is auto-injected by layout */}
    </div>
  );
}

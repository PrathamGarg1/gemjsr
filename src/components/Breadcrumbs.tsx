"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter((item) => item !== "");
  
  const breadcrumbItems = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const label = segment.replace(/-/g, " ").replace(/\b\w/g, char => char.toUpperCase());
    
    return {
      href,
      label,
      isLast: index === segments.length - 1
    };
  });

  // Schema Markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://gembid.help"
      },
      ...breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://gembid.help${item.href}`
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="flex items-center text-sm text-slate-500 mb-6 font-medium" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
          <Home className="h-4 w-4" /> Home
        </Link>
        {breadcrumbItems.map((item) => (
          <div key={item.href} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2 text-slate-300" />
            {item.isLast ? (
              <span className="text-slate-900 font-semibold">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-indigo-600 transition-colors">
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}

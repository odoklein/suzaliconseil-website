"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Script from "next/script";

/**
 * A reusable Breadcrumbs component that also injects BreadcrumbList JSON-LD schema
 * 
 * @param {Array} items - Array of breadcrumb items { label, href }
 */
export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  const baseUrl = "https://suzaliconseil.com";

  // Build the JSON-LD schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": baseUrl
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `${baseUrl}${item.href}`
      }))
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data for Breadcrumbs */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        strategy="afterInteractive"
      />

      {/* Visual Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="w-full text-sm text-gray-500 mb-6 flex overflow-x-auto whitespace-nowrap hide-scrollbar">
        <ol className="flex items-center space-x-2">
          <li>
            <Link 
              href="/"
              className="text-gray-400 hover:text-[#0D332B] transition-colors flex items-center"
              aria-label="Accueil"
            >
              <Home size={14} />
            </Link>
          </li>
          
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={item.href} className="flex items-center space-x-2">
                <ChevronRight size={14} className="text-gray-300 flex-shrink-0" />
                {isLast ? (
                  <span className="text-[#0D332B] font-medium truncate max-w-[200px] md:max-w-xs" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href}
                    className="hover:text-[#0D332B] transition-colors truncate max-w-[150px] md:max-w-[200px]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

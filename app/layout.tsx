import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "0/9 SYSTEM — Strength in Silence",
  description: "Performance engineered for the disciplined few.",
  openGraph: {
    title: "0/9 SYSTEM — Strength in Silence",
    description: "Performance engineered for the disciplined few.",
    url: "https://zero9.co",
    siteName: "0/9 SYSTEM",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        
        {/* Klaviyo Tracking Scripts */}
        <Script
          src="https://static.klaviyo.com/onsite/js/UbPQTM/klaviyo.js?company_id=UbPQTM"
          strategy="afterInteractive"
          async
        />
        <Script id="klaviyo-init" strategy="afterInteractive">
          {`
            !function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();
          `}
        </Script>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Toaster } from "@/client/components/ui/toaster";
import { Toaster as Sonner } from "@/client/components/ui/sonner";
import "../client/global.css";

export const metadata: Metadata = {
  title: "SafeAlert - Emergency Help at Your Fingertips",
  description:
    "Fast, reliable access to emergency services and support in Kenya. Get help when you need it most with just a tap.",
  keywords: [
    "emergency",
    "SafeAlert",
    "Kenya",
    "emergency services",
    "911",
    "ambulance",
    "police",
    "fire brigade",
  ],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%230084FF' width='100' height='100' rx='20'/><circle cx='50' cy='50' r='35' fill='none' stroke='white' stroke-width='3'/><path d='M50 30 L50 50 L65 50' stroke='white' stroke-width='3' stroke-linecap='round'/></svg>",
        sizes: "32x32",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "SafeAlert - Emergency Services at Your Fingertips",
    description:
      "Kenya's trusted emergency response platform. Call ambulance, fire brigade, police, and share your location instantly.",
    siteName: "SafeAlert",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0084FF" />
      </head>
      <body className="bg-background text-foreground">
        {children}
        <Toaster />
        <Sonner />
      </body>
    </html>
  );
}

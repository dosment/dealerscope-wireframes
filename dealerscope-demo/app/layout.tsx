import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-inter',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: '--font-ibm-plex-sans',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: '--font-ibm-plex-mono',
});

export const metadata: Metadata = {
  title: "DealerScope - Automotive Vendor Sales Intelligence",
  description: "Professional B2B SaaS platform for monitoring dealership websites and tracking competitor product changes in real-time",
  keywords: "automotive, vendor, dealership, sales intelligence, competitor tracking, B2B SaaS",
  authors: [{ name: "DealerScope" }],
  creator: "DealerScope",
  publisher: "DealerScope",
  metadataBase: new URL('https://dealerscope.com'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "DealerScope - Automotive Vendor Sales Intelligence",
    description: "Professional B2B SaaS platform for monitoring dealership websites and tracking competitor product changes",
    type: "website",
    locale: "en_US",
    siteName: "DealerScope",
  },
  twitter: {
    card: "summary_large_image",
    title: "DealerScope - Automotive Vendor Sales Intelligence",
    description: "Professional B2B SaaS platform for monitoring dealership websites",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="clarity" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('dealerscope-theme') || 'clarity';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'clarity');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

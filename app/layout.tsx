import type { Metadata } from "next";
import { Playfair_Display, Inter, Space_Grotesk } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Premium Typography System
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MIGRANT GESTIÓN SAS | Elite Immigration Consulting for Global Citizens",
  description: "Premier immigration consulting firm offering strategic visa services, corporate mobility, and regulatory compliance. Trusted by international executives, investors, and high-net-worth individuals. Neiva, Colombia.",
  keywords: "elite immigration consulting, executive visa services, corporate mobility Colombia, PPT regularization, international compliance, diplomatic consulting, Neiva",
  authors: [{ name: "Alexis Jose Cedeño" }],
  openGraph: {
    title: "MIGRANT GESTIÓN SAS | Elite Immigration Consulting",
    description: "Strategic immigration solutions for the global elite. Visas, corporate mobility, and seamless regulatory compliance.",
    type: "website",
    locale: "es_CO",
    url: "https://migrantgestion.com",
    siteName: "MIGRANT GESTIÓN SAS",
  },
  twitter: {
    card: "summary_large_image",
    title: "MIGRANT GESTIÓN SAS | Elite Immigration",
    description: "Strategic immigration solutions for global executives and investors.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="es" 
      className={`scroll-smooth ${playfair.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased bg-void-950 text-slate-100 font-sans overflow-x-hidden">
        <Navbar />
        <main className="relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

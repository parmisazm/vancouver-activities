import type { Metadata } from "next";
import { Montserrat, Open_Sans, Adamina } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const adamina = Adamina({
  variable: "--font-adamina",
  subsets: ["latin"],
  weight: ["400"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  verification: {
    google: "t4Cv7B4728ggmllGGJo5s2kXJ3dQ8ZgEP2MI67IusK8",
  },
  title: "Vancouver Activities | Things to Do in Vancouver BC",
  description: "Find the best things to do in Vancouver, BC. Kids activities, family events, outdoor adventures, indoor play, free activities, and seasonal guides. Updated weekly.",
  keywords: "things to do in Vancouver, Vancouver activities, kids activities Vancouver, indoor activities Vancouver, free things to do Vancouver, Vancouver events this weekend, rainy day activities Vancouver, birthday party venues Vancouver, summer camps Vancouver",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Vancouver Activities | Family Activities & Events",
    description: "Your family's guide to the best activities, events, and weekend fun in Vancouver, BC.",
    url: "https://vancouveractivities.com",
    siteName: "Vancouver Activities",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${adamina.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y92NGG86WG" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-Y92NGG86WG');`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Banner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

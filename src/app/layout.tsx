import type { Metadata } from "next";
import { Dancing_Script, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/util";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  style: "normal",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Intigrate - Make Your Presence Matter",
  description:
    "Embrace the richness of our traditional Indian roots, reflecting in our packaging designs, scents inspired by cultural elements, and the warmth of heartfelt gifting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(sora.className, dancing.style)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import { Overlock } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const overlock = Overlock({
  subsets: ["latin"],
  variable: "--font-overlock", // Optional: for using it in CSS
  weight: ["400", "700"],      // Optional: Regular and Bold
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Optional: Regular, Medium, SemiBold, Bold
});

export const metadata = {
  title: "Prana Healthcare - Primary & Urgent Care Services",
  description: "Ad Vitam - For Life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

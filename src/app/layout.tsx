import type { Metadata } from "next";
import { Poppins, Kanit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const kanit = Kanit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Kanit',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Virtual Pro",
  description: "Tech Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

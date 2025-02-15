import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import NavBar from "@/components/NavBar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shopery",
  description: "Shopery is an e-commerce platform for organic food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

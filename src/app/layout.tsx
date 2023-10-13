import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/homeComponents/footer/Footer"

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DataDaur",
  description: "A software company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{overflowX: "hidden" }}>
      <body className={space_grotesk.className} style={{ overflowX: "hidden", position: "relative" }}>
        <div>
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}

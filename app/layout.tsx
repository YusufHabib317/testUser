import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar";

import { Cairo } from "next/font/google";

const font = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "أهلا بكم في Proofy",
  description: "Welcome to Proofy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html dir="rtl" lang="ar">
        <body className={font.className}>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}

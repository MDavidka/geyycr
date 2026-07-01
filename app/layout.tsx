import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SectionNavbar } from "@/components/sections/navbar";
import { SectionFooter } from "@/components/sections/footer";
import { hostingCompanyData } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Hostify - Blazing Fast & Secure Web Hosting",
  description: "Experience unparalleled performance, ironclad security, and 24/7 expert support for your website. Get online today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <SectionNavbar
          brand={hostingCompanyData.navbar.brand}
          links={hostingCompanyData.navbar.links}
          auth={hostingCompanyData.navbar.auth}
        />
        {children}
        <SectionFooter
          brand={hostingCompanyData.footer.brand}
          columns={hostingCompanyData.footer.columns}
        />
      </body>
    </html>
  );
}

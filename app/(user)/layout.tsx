import type { Metadata } from "next";
import "../globals.css";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

import Header from "@/components/Header";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: "Blogish",
  description: "Generated by create next app and Sanity Studio CMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        {draftMode().isEnabled && (
          <div className="">
            <a href="/api/disable-draft" className="p-4 bg-blue-300 block">
              Disable preview mode
            </a>
          </div>
        )}
        <main>
          <Header />
          <Banner />
          {children}
        </main>
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}

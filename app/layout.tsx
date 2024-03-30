"use client";

import "./globals.css";
import Home from "@/components/Home";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className=" relative overflow-hidden">
          {children}
          <Home />
        </main>
      </body>
    </html>
  );
}

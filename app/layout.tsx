import "./globals.css";
import Script from "next/script";
import { ReactNode } from "react";

export const metadata = {
  title: "Asasanta Nexus",
  description: "AI-powered digital infrastructure for Africa",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://sdk.minepi.com/pi-sdk.js"
          strategy="beforeInteractive"
        />
      </head>

      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Asasanta Nexus",
  description: "AI-powered digital infrastructure for Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Script
          src="https://sdk.minepi.com/pi-sdk.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
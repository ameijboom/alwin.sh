import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/footer.tsx";
import Footer from "@/components/footer.tsx";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Alwin Meijboom",
  description: "Definitely one of the portfolios of all time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} font-(family-name:--font-jetbrains-mono) antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

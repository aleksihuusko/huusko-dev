import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/app/globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const overusedGrotesk = localFont({
  src: "./fonts/overused-grotesk.woff2",
  variable: "--font-overused-grotesk",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aleksi Huusko | A creative developer and web designer",
  description:
    "Web developer and designer from Helsinki, Finland. Crafting dynamic, innovative digital products and evolving user experiences driven by data insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${overusedGrotesk.variable} scroll-smooth font-medium antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

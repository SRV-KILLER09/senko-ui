import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Senko UI",
  description: "Modern UI components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <RootProvider search={{ options: { delayMs: 100 } }}>{children}</RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
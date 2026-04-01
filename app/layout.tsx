import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vogue Article Clone",
  description: "Mobile-first Vogue-style article clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

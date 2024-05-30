import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const anta = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100","300","400","500","700","900"]
});

export const metadata: Metadata = {
  title: "Netflix",
  description: "A Netflix é uma plataforma de assinatura que oferece uma variedade de filmes, séries, documentários, realitys e muito mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={anta.className}>{children}</body>
    </html>
  );
}

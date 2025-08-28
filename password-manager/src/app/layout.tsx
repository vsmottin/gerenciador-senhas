import type { Metadata } from "next";
import './globals.css';
import {Poppins} from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Gerenciador de senha",
  description: "Criado por Victória, SEINFO (2025).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./ui/globals.css";
import Navbar from "./ui/nav-bar";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>
      <Navbar />{children}</body>
    </html>
  );
}

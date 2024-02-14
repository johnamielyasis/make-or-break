import type { Metadata } from "next";
import { Overpass, Roboto } from "next/font/google";
import "./globals.css";
import { Nav } from "@/modules";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-overpass",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Make or Break",
  description:
    " A game where every decision counts on the journey to find love! Navigate through a series of intriguing questions to discover more about each other and the connection you may or may not share.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${overpass.variable} ${roboto.variable}`}>
        <Nav />
        <main className="flex min-h-screen w-full flex-col">{children}</main>
      </body>
    </html>
  );
}

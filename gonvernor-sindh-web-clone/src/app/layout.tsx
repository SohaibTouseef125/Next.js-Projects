import {  Roboto } from "next/font/google";
import type { Metadata } from "next";

import Footer from "@/components/Footer/index";
import "./globals.css";
import Headers from "@/components/Headers/index";

const roboto = Roboto ({
  weight: ["300","400", "700","900"],
  subsets : ["latin"],
});

export const metadata: Metadata = {
  title: "Governor Initiative",
  description: "Governor Initiative Artificial Intelligence",
  icons: {
    icon:{url:"/assest/logo.png", type: "logo/png"}
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
         <Headers/>
        <div className="mt-20 mb-20">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}

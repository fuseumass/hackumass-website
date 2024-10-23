import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HackUMass XII - An outpost for your craziest ideas",
  description: "HackUMass is an outpost for your craziest ideas. November 8 - 10, 2024 at UMass Amherst.",
  metadataBase: new URL('http://localhost:3000'),
  // openGraph: {
  //   title: 'Title webtsite',
  //   description: 'this is the desciption',
  //   image: 'url/image.png'
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   site: '@eMartiiin94',
  //   title: 'Title webtsite',
  //   description: 'this is the desciption',
  //   image: 'url/image.png'
  // }
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

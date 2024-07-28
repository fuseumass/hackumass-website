import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HackUMass XII - An outpost for your craziest ideas",
  description: "HackUMass is an outpost for your craziest ideas. November 8 - 10, 2024 at UMass Amherst.",
  icons: [{rel: 'icon', type: 'image/png', href: '/BlueGears.png'}]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

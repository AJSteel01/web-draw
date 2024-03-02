import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const workSans = Work_Sans({ 
  subsets: ["latin"],
  variable: '--font--work-sans--',
  weight: ['400','600','700']
});

export const metadata: Metadata = {
  title: "WebDraw",
  description: "A tool made for web designers and developers to freely collaborate in real time and design their websites or apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-primary-grey-200`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}

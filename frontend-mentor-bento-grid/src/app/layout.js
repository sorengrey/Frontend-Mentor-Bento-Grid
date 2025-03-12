import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dm_Sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bento Grid",
  description: "A challenge from Frontend Mentor, completed by Heather Smith",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_Sans.variable} antialiased`}>{children}</body>
    </html>
  );
}

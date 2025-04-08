import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_Sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bento Grid",
  description: "A challenge from Frontend Mentor, completed by Heather Smith",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_Sans.variable} antialiased`}>{children}</body>
    </html>
  );
}

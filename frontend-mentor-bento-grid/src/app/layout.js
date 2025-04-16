import "./globals.css";

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
      <body className={"font-sans antialiased"}>{children}</body>
    </html>
  );
}

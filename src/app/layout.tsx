import "./globals.css";
import type { Metadata } from "next";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Luxemart",
  description: "Ecommerce Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white antialiased" style={{ fontFamily: "Poppins, sans-serif" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

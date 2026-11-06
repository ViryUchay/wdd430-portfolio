import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Projects",
  description: "Week 01 Next.js scaffold",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<html lang="en">
  <body
        style={{
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          background: "#f9f9fb",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <main
          style={{
            flex: 1,
            maxWidth: 720,
            margin: "2rem auto",
            padding: "0 1rem",
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
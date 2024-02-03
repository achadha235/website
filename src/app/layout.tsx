import Layout from "@/components/Layout";
import "@/app/globals.css";
import Script from "next/script";
import { cookies } from "next/headers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhishek Chadha | Blog & Portfolio",
  description:
    "Abhishek is a full stack software engineer from New Delhi with over 10 years of experience, specialized in B2C products.",
  icons: ["/logo.svg"],
  openGraph: {
    images: ["/og"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="beforeInteractive"
          src="https://kit.fontawesome.com/dc3bbac095.js"
        />
      </head>
      <body>
        <Layout theme={cookies().get("theme")?.value}>{children}</Layout>
      </body>
    </html>
  );
}

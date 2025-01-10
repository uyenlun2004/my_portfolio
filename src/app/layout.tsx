import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import "./styles/globals.scss";
import "./styles/responsive.scss";

export const metadata: Metadata = {
  title: "Tuanxu | My Portfolio Page",
  icons: "./icon-tuanxu.svg",
  description:
    "Explore Tuanxu's portfolio to discover innovative projects, advanced developer skills, and professional experiences. Connect for collaborations or opportunities to work together."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="canonical" href="https://tuanxu5.pages.dev" />
      </Head>

      <body>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></Script>
        <Script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"></Script>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/storyblok/storyblok-provider";

const inter = Inter({ subsets: ["latin"] });

storyblokInit({
  accessToken: process.env.STORYBLOK_KEY,
  apiOptions: {
    region: "us",
  },
  use: [apiPlugin],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
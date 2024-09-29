import type { Metadata } from "next";
import "@/app/globals.css";
import { RootClient } from "./_components/rootClient/RootClient";
import { inter } from "./_ui/font";

const siteUrl = process.env.NEXT_PUBLIC_PRODUCTION_SITE_URL;

export const metadata: Metadata = {
  title: {
    default: "Kento Honda - New Portfolio Website",
    template: "%s | Kento Honda - New Portfolio Website",
  },
  icons: "favicon.ico",
  description:
    "This is Kento Honda's new portfolio website. Please check it out!",
  openGraph: {
    title: "Kento Honda's portfolio website",
    description:
      "This is Kento Honda's new portfolio website. Please check it out!",
    url: siteUrl,
    siteName: "Kento Honda's portfolio website",
    images: [`${siteUrl}/assets/common/og-image.png`],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Kento Honda's portfolio website",
    card: "summary_large_image",
    images: [`${siteUrl}/assets/common/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}

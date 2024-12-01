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
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    title: "Kento Honda's portfolio website",
    card: "summary_large_image",
    images: [`${siteUrl}/assets/common/og-image.png`],
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const supportedLocales = ["en", "ja", "fr"];
  const currentLocale = supportedLocales.includes(locale) ? locale : "en";

  return (
    <html className="scroll-smooth" lang={currentLocale}>
      <body className={inter.className}>
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}

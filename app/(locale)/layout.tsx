import type { Metadata } from "next";
import "@/app/globals.css";
import { RootClient } from "./_components/RootClient";
import { inter } from "./_ui/font";

export const metadata: Metadata = {
  title: {
    default: "Kento Honda - New Portfolio Website",
    template: "%s | Kento Honda - New Portfolio Website",
  },
  icons: "favicon.ico",
  description:
    "This is Kento Honda's new portfolio website. Please check it out!",
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

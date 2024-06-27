import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "@/app/ui/globals.css";

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cruise",
  description: "SNS with your hobbies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto_sans_jp.className}>{children}</body>
    </html>
  );
}

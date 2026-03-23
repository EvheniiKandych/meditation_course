import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Meditation Course - The Gap Between Thoughts",
  description:
    "A focused meditation course with 4 stages, practical methods, and measurable outcomes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Meditation Course",
    description:
      "Find the gap between your thoughts with a structured, practical program.",
    url: "/",
    siteName: "Meditation Course",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}

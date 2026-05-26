import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HeuTec GmbH | LED Beleuchtung, Energiespeicher & Projektlösungen",
  description:
    "B2B Anbieter für LED-Beleuchtung, Outdoor Energy Storage, Großhandel und Full-Service-Projektlösungen für energieeffiziente Unternehmen."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

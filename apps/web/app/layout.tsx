import { Staatliches, IBM_Plex_Sans_Condensed } from "next/font/google";
import "./globals.css";

const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const ibmPlex = IBM_Plex_Sans_Condensed({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${staatliches.variable} ${ibmPlex.variable}`}>
      <body>{children}</body>
    </html>
  );
}

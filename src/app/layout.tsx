import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jinu & Divyamol — September 2, 2026",
  description: "The wedding celebration of Jinu Albert and Divyamol K B.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

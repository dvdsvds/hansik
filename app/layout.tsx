import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "담 — Modern Korean", description: "Modern Korean restaurant." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}</body></html>;
}

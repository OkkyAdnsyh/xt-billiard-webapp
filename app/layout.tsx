import type { Metadata } from "next";
import "../style/global.scss";

export const metadata: Metadata = {
  title: "XT Billiard",
  description: "XT Billiard is a place for you to spend your time playing 8-Ball pool with your friend and family",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="wrapper">
          {children}
        </main>
      </body>
    </html>
  );
}

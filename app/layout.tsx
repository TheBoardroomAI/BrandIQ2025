import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brand IQ Creative | Higher Education Marketing & Branding",
  description: "Integrating the power of market research with the emotion of authentic storytelling to drive distinctive brands and targeted marketing solutions for higher education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

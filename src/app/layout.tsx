import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../index.css";
import ClientLayout from "./ClientLayout";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "TechInvention | Advancing Global Health Through Biotechnology",
  description: "Global biotech company focused on vaccines, diagnostics, and biotherapeutics. Innovation that protects tomorrow.",
  icons: {
    icon: "https://impulsedigital.co.in/favicon.ico",
    apple: "https://impulsedigital.co.in/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link rel="preconnect" href="https://impulsedigital.co.in" crossOrigin="anonymous" />
      </head>
      <body className="bg-brand-background text-brand-content selection:bg-brand-primary/10 selection:text-brand-primary font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../index.css";
import ClientLayout from "./ClientLayout";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
});

const basePath = process.env.BASE_PATH || '';

export const metadata: Metadata = {
  title: "TechInvention | Advancing Global Health Through Biotechnology",
  description: "Global biotech company focused on vaccines, diagnostics, and biotherapeutics. Innovation that protects tomorrow.",
  icons: {
    icon: `${basePath}/favicon.ico?v=2`,
    apple: `${basePath}/favicon.ico?v=2`
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <body className="bg-brand-background text-brand-content selection:bg-brand-primary/10 selection:text-brand-primary font-sans" suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

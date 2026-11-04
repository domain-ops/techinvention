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
      <head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-NVH92839"
        />
        <script
          id="gtm-init"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());`,
          }}
        />
      </head>
      <body className="bg-brand-background text-brand-content selection:bg-brand-primary/10 selection:text-brand-primary font-sans" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVH92839"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

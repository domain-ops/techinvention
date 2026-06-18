import type { Metadata } from "next";
import "../index.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "TechInvention | Advancing Global Health Through Biotechnology",
  description: "Global biotech company focused on vaccines, diagnostics, and biotherapeutics. Innovation that protects tomorrow.",
  icons: {
    icon: "/assets/images/favicon-techinvention.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-brand-background text-brand-content selection:bg-brand-primary/10 selection:text-brand-primary">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

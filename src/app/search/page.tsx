import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Search | TechInvention",
  description: "Search our website to find information about our products, research and development, consulting services, and latest insights.",
  openGraph: {
    title: "Search | TechInvention",
    description: "Search our website to find information about our products, research and development, consulting services, and latest insights.",
    url: "https://techinvention.com/search/",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search | TechInvention",
    description: "Search our website to find information about our products, research and development, consulting services, and latest insights.",
  },
  alternates: {
    canonical: "https://techinvention.com/search/",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import React, { Suspense } from 'react';
import PageComponent from '../../views/Search';

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-background" />}>
      <PageComponent />
    </Suspense>
  );
}

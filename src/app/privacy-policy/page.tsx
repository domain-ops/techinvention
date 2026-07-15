import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | TechInvention",
  description: "Read the privacy policy of TechInvention Lifecare Pvt. Ltd. to understand how we collect, store, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | TechInvention",
    description: "Read the privacy policy of TechInvention Lifecare Pvt. Ltd. to understand how we collect, store, and protect your personal information.",
    url: "https://impulsedigital.co.in/techinvention/privacy-policy",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | TechInvention",
    description: "Read the privacy policy of TechInvention Lifecare Pvt. Ltd. to understand how we collect, store, and protect your personal information.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import PageComponent from '../../views/PrivacyPolicy';

export default function Page() {
  return <PageComponent />;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact TechInvention | Global Offices & Inquiries",
  description: "Get in touch with TechInvention. Contact our global headquarters and offices for partnerships, advisory inquiries, and product information.",
  openGraph: {
    title: "Contact TechInvention | Global Offices & Inquiries",
    description: "Get in touch with TechInvention. Contact our global headquarters and offices for partnerships, advisory inquiries, and product information.",
    url: "https://impulsedigital.co.in/techinvention/contact-us",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact TechInvention | Global Offices & Inquiries",
    description: "Get in touch with TechInvention. Contact our global headquarters and offices for partnerships, advisory inquiries, and product information.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention/contact-us",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../../views/Contact';

export default function Page() {
  return <PageComponent />;
}

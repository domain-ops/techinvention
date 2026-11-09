import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact TechInvention for Enquiries & Partnerships",
  description: "Contact TechInvention for vaccine products, manufacturing services, R&D collaborations, consulting, technology partnerships and general enquiries.",
  openGraph: {
    title: "Contact TechInvention for Enquiries & Partnerships",
    description: "Contact TechInvention for vaccine products, manufacturing services, R&D collaborations, consulting, technology partnerships and general enquiries.",
    url: "https://techinvention.com/contact-us/",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact TechInvention for Enquiries & Partnerships",
    description: "Contact TechInvention for vaccine products, manufacturing services, R&D collaborations, consulting, technology partnerships and general enquiries.",
  },
  alternates: {
    canonical: "https://techinvention.com/contact-us/",
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

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Certifications & Compliance | TechInvention",
  description: "Discover TechInvention's regulatory certifications, quality standards, and compliance framework ensuring safe and effective biotech development.",
  openGraph: {
    title: "Certifications & Compliance | TechInvention",
    description: "Discover TechInvention's regulatory certifications, quality standards, and compliance framework ensuring safe and effective biotech development.",
    url: "https://impulsedigital.co.in/techinvention/certification",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications & Compliance | TechInvention",
    description: "Discover TechInvention's regulatory certifications, quality standards, and compliance framework ensuring safe and effective biotech development.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention/certification",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../../views/Certification';

export default function Page() {
  return <PageComponent />;
}

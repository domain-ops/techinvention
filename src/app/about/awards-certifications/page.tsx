import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Awards & Certifications | TechInvention",
  description: "Explore the certifications, awards, and recognitions received by TechInvention, showcasing our commitment to quality, ESG compliance, and biopharma innovation.",
  openGraph: {
    title: "Awards & Certifications | TechInvention",
    description: "Explore the certifications, awards, and recognitions received by TechInvention, showcasing our commitment to quality, ESG compliance, and biopharma innovation.",
    url: "https://impulsedigital.co.in/techinvention/about/awards-certifications",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awards & Certifications | TechInvention",
    description: "Explore the certifications, awards, and recognitions received by TechInvention, showcasing our commitment to quality, ESG compliance, and biopharma innovation.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention/about/awards-certifications",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import PageComponent from '../../../views/AwardsCertifications';

export default function Page() {
  return <PageComponent />;
}

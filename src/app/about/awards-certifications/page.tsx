import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Awards, Recognition & Certifications - TechInvention",
  description: "Explore TechInvention's awards, ISO certifications and industry recognition highlighting its commitment to quality, innovation and responsible business practices.",
  openGraph: {
    title: "Awards, Recognition & Certifications - TechInvention",
    description: "Explore TechInvention's awards, ISO certifications and industry recognition highlighting its commitment to quality, innovation and responsible business practices.",
    url: "https://techinvention.com/about/awards-certifications/",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awards, Recognition & Certifications - TechInvention",
    description: "Explore TechInvention's awards, ISO certifications and industry recognition highlighting its commitment to quality, innovation and responsible business practices.",
  },
  alternates: {
    canonical: "https://techinvention.com/about/awards-certifications/",
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

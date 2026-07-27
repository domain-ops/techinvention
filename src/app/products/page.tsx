import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Biotech Products & Solutions | TechInvention",
  description: "Browse TechInvention's portfolio of vaccines, rapid diagnostic kits, biotherapeutics, and specialized medical countermeasure solutions.",
  openGraph: {
    title: "Biotech Products & Solutions | TechInvention",
    description: "Browse TechInvention's portfolio of vaccines, rapid diagnostic kits, biotherapeutics, and specialized medical countermeasure solutions.",
    url: "https://impulsedigital.co.in/products",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biotech Products & Solutions | TechInvention",
    description: "Browse TechInvention's portfolio of vaccines, rapid diagnostic kits, biotherapeutics, and specialized medical countermeasure solutions.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/products",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../../views/Products';

export default function Page() {
  return <PageComponent />;
}

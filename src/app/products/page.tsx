import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vaccine Products & Portfolio - TechInvention",
  description: "Browse TechInvention's portfolio of vaccines, rapid diagnostic kits, biotherapeutics, and specialized medical countermeasure solutions.",
  openGraph: {
    title: "Vaccine Products & Portfolio - TechInvention",
    description: "Browse TechInvention's portfolio of vaccines, rapid diagnostic kits, biotherapeutics, and specialized medical countermeasure solutions.",
    url: "https://techinvention.com/products/",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaccine Products & Portfolio - TechInvention",
    description: "Browse TechInvention's portfolio of vaccines, rapid diagnostic kits, biotherapeutics, and specialized medical countermeasure solutions.",
  },
  alternates: {
    canonical: "https://techinvention.com/products/",
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

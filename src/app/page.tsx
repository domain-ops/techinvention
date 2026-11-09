import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vaccine manufacturing company in India - TechInvention",
  description: "TechInvention advances vaccine manufacturing and biopharmaceutical development in India through integrated R&D, GMP manufacturing and consulting services.",
  openGraph: {
    title: "Vaccine manufacturing company in India - TechInvention",
    description: "TechInvention advances vaccine manufacturing and biopharmaceutical development in India through integrated R&D, GMP manufacturing and consulting services.",
    url: "https://techinvention.com/",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaccine manufacturing company in India - TechInvention",
    description: "TechInvention advances vaccine manufacturing and biopharmaceutical development in India through integrated R&D, GMP manufacturing and consulting services.",
  },
  alternates: {
    canonical: "https://techinvention.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../views/Home';

export default function Page() {
  return <PageComponent />;
}

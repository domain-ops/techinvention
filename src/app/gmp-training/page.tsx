import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GMP Training & Workforce Development | TechInvention",
  description: "TechInvention's professional Good Manufacturing Practice (GMP) training programs prepare workforce talents for quality-driven biotech manufacturing.",
  openGraph: {
    title: "GMP Training & Workforce Development | TechInvention",
    description: "TechInvention's professional Good Manufacturing Practice (GMP) training programs prepare workforce talents for quality-driven biotech manufacturing.",
    url: "https://impulsedigital.co.in/techinvention/gmp-training",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMP Training & Workforce Development | TechInvention",
    description: "TechInvention's professional Good Manufacturing Practice (GMP) training programs prepare workforce talents for quality-driven biotech manufacturing.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention/gmp-training",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../../views/GmpTraining';

export default function Page() {
  return <PageComponent />;
}

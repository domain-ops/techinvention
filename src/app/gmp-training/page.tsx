import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GMP Training for Pharmaceutical Industry - TechInvention",
  description: "TechInvention offers GMP training for the pharmaceutical industry, covering quality assurance, manufacturing practices and regulatory compliance.",
  openGraph: {
    title: "GMP Training for Pharmaceutical Industry - TechInvention",
    description: "TechInvention offers GMP training for the pharmaceutical industry, covering quality assurance, manufacturing practices and regulatory compliance.",
    url: "https://techinvention.com/gmp-training/",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMP Training for Pharmaceutical Industry - TechInvention",
    description: "TechInvention offers GMP training for the pharmaceutical industry, covering quality assurance, manufacturing practices and regulatory compliance.",
  },
  alternates: {
    canonical: "https://techinvention.com/gmp-training/",
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

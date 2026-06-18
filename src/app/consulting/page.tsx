import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Biotech Consulting Services | TechInvention",
  description: "TechInvention offers end-to-end biotech consulting, from feasibility studies and technology transfers to facility design and compliance.",
  openGraph: {
    title: "Biotech Consulting Services | TechInvention",
    description: "TechInvention offers end-to-end biotech consulting, from feasibility studies and technology transfers to facility design and compliance.",
    url: "https://impulsedigital.co.in/techinvention/consulting",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biotech Consulting Services | TechInvention",
    description: "TechInvention offers end-to-end biotech consulting, from feasibility studies and technology transfers to facility design and compliance.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention/consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../../views/Consulting';

export default function Page() {
  return <PageComponent />;
}

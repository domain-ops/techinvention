import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Biopharma Consulting & GMP Advisory - TechInvention",
  description: "TechInvention provides biopharma consulting services, including vaccine feasibility studies, GMP facility design, regulatory support and technology transfer.",
  openGraph: {
    title: "Biopharma Consulting & GMP Advisory - TechInvention",
    description: "TechInvention provides biopharma consulting services, including vaccine feasibility studies, GMP facility design, regulatory support and technology transfer.",
    url: "https://techinvention.com/consulting/",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biopharma Consulting & GMP Advisory - TechInvention",
    description: "TechInvention provides biopharma consulting services, including vaccine feasibility studies, GMP facility design, regulatory support and technology transfer.",
  },
  alternates: {
    canonical: "https://techinvention.com/consulting/",
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

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Strategic & Technical Advisory | TechInvention",
  description: "TechInvention provides strategic, regulatory, and technical advisory services for biotechnology and pharmaceutical manufacturing operations globally.",
  openGraph: {
    title: "Strategic & Technical Advisory | TechInvention",
    description: "TechInvention provides strategic, regulatory, and technical advisory services for biotechnology and pharmaceutical manufacturing operations globally.",
    url: "https://impulsedigital.co.in/techinvention/strategic-technical-advisory",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic & Technical Advisory | TechInvention",
    description: "TechInvention provides strategic, regulatory, and technical advisory services for biotechnology and pharmaceutical manufacturing operations globally.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention/strategic-technical-advisory",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../../views/StrategicTechnicalAdvisory';

export default function Page() {
  return <PageComponent />;
}

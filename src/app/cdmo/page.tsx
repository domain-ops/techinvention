import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vaccine CDMO & Biologics Manufacturing - TechInvention",
  description: "TechInvention provides vaccine CDMO services, including biologics manufacturing, drug substance manufacturing, drug product development and fill-finish services.",
  openGraph: {
    title: "Vaccine CDMO & Biologics Manufacturing - TechInvention",
    description: "TechInvention provides vaccine CDMO services, including biologics manufacturing, drug substance manufacturing, drug product development and fill-finish services.",
    url: "https://techinvention.com/cdmo/",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaccine CDMO & Biologics Manufacturing - TechInvention",
    description: "TechInvention provides vaccine CDMO services, including biologics manufacturing, drug substance manufacturing, drug product development and fill-finish services.",
  },
  alternates: {
    canonical: "https://techinvention.com/cdmo/",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../../views/CDMO';

export default function Page() {
  return <PageComponent />;
}

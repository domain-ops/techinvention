import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CDMO Services | TechInvention",
  description: "Explore our Contract Development and Manufacturing Organization (CDMO) services featuring our state-of-the-art GCMC facility, Drug Substance, and Drug Product capabilities.",
  openGraph: {
    title: "CDMO Services | TechInvention",
    description: "Explore our Contract Development and Manufacturing Organization (CDMO) services featuring our state-of-the-art GCMC facility, Drug Substance, and Drug Product capabilities.",
    url: "https://impulsedigital.co.in/techinvention/cdmo",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CDMO Services | TechInvention",
    description: "Explore our Contract Development and Manufacturing Organization (CDMO) services featuring our state-of-the-art GCMC facility, Drug Substance, and Drug Product capabilities.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention/cdmo",
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

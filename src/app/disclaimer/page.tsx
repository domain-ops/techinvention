import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Disclaimer | TechInvention",
  description: "Read the disclaimer of TechInvention Lifecare Pvt. Ltd. regarding the use of information and services on this site.",
  openGraph: {
    title: "Disclaimer | TechInvention",
    description: "Read the disclaimer of TechInvention Lifecare Pvt. Ltd. regarding the use of information and services on this site.",
    url: "https://impulsedigital.co.in/techinvention/disclaimer",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | TechInvention",
    description: "Read the disclaimer of TechInvention Lifecare Pvt. Ltd. regarding the use of information and services on this site.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention/disclaimer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import PageComponent from '../../views/Disclaimer';

export default function Page() {
  return <PageComponent />;
}

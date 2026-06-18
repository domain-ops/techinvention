import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vaccine R&D & Pipelines | TechInvention",
  description: "Read about TechInvention\\\\'s vaccine development pipeline, including viral vector and mRNA platforms targeting critical global infectious diseases.",
  openGraph: {
    title: "Vaccine R&D & Pipelines | TechInvention",
    description: "Read about TechInvention\\\\'s vaccine development pipeline, including viral vector and mRNA platforms targeting critical global infectious diseases.",
    url: "https://impulsedigital.co.in/techinvention/rnd/vaccines",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaccine R&D & Pipelines | TechInvention",
    description: "Read about TechInvention\\\\'s vaccine development pipeline, including viral vector and mRNA platforms targeting critical global infectious diseases.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention/rnd/vaccines",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../../../views/Vaccines';

export default function Page() {
  return <PageComponent />;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms & Conditions | TechInvention",
  description: "Read the terms and conditions of TechInvention Lifecare Limited to understand user rights and restrictions while using this website.",
  openGraph: {
    title: "Terms & Conditions | TechInvention",
    description: "Read the terms and conditions of TechInvention Lifecare Limited to understand user rights and restrictions while using this website.",
    url: "https://impulsedigital.co.in/techinvention/terms-and-conditions",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | TechInvention",
    description: "Read the terms and conditions of TechInvention Lifecare Limited to understand user rights and restrictions while using this website.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import PageComponent from '../../views/TermsAndConditions';

export default function Page() {
  return <PageComponent />;
}

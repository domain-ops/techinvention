import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Membership & Associations | TechInvention",
  description: "Explore TechInvention's professional memberships, corporate associations, and collaborations in the global biotech and pharmaceutical ecosystem.",
  openGraph: {
    title: "Membership & Associations | TechInvention",
    description: "Explore TechInvention's professional memberships, corporate associations, and collaborations in the global biotech and pharmaceutical ecosystem.",
    url: "https://impulsedigital.co.in/techinvention/membership",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership & Associations | TechInvention",
    description: "Explore TechInvention's professional memberships, corporate associations, and collaborations in the global biotech and pharmaceutical ecosystem.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention/membership",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../../views/Membership';

export default function Page() {
  return <PageComponent />;
}

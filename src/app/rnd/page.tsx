import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vaccine Development & R&D Services - TechInvention",
  description: "TechInvention's vaccine development and R&D services, including process development, preclinical research and BSL-2 laboratory capabilities.",
  openGraph: {
    title: "Vaccine Development & R&D Services - TechInvention",
    description: "TechInvention's vaccine development and R&D services, including process development, preclinical research and BSL-2 laboratory capabilities.",
    url: "https://techinvention.com/rnd/",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaccine Development & R&D Services - TechInvention",
    description: "TechInvention's vaccine development and R&D services, including process development, preclinical research and BSL-2 laboratory capabilities.",
  },
  alternates: {
    canonical: "https://techinvention.com/rnd/",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../../views/RND';

export default function Page() {
  return <PageComponent />;
}

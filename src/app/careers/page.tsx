import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Careers at TechInvention | Join Our Biotech Team",
  description: "Explore career opportunities at TechInvention. Join a diverse team of scientists, researchers, and experts advancing global health biotechnology.",
  openGraph: {
    title: "Careers at TechInvention | Join Our Biotech Team",
    description: "Explore career opportunities at TechInvention. Join a diverse team of scientists, researchers, and experts advancing global health biotechnology.",
    url: "https://impulsedigital.co.in/techinvention/careers",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at TechInvention | Join Our Biotech Team",
    description: "Explore career opportunities at TechInvention. Join a diverse team of scientists, researchers, and experts advancing global health biotechnology.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention/careers",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../../views/Careers';

export default function Page() {
  return <PageComponent />;
}

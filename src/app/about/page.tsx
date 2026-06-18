import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About TechInvention | Our Journey & Vision",
  description: "Learn about TechInvention's journey, vision, mission, and leadership team dedicated to global health innovation and biotechnology solutions.",
  openGraph: {
    title: "About TechInvention | Our Journey & Vision",
    description: "Learn about TechInvention's journey, vision, mission, and leadership team dedicated to global health innovation and biotechnology solutions.",
    url: "https://impulsedigital.co.in/techinvention/about",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About TechInvention | Our Journey & Vision",
    description: "Learn about TechInvention's journey, vision, mission, and leadership team dedicated to global health innovation and biotechnology solutions.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../../views/About';

export default function Page() {
  return <PageComponent />;
}

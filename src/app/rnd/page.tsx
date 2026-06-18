import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Research & Development (R&D) | TechInvention",
  description: "Explore TechInvention's research and development initiatives, biotechnology platforms, and scientific innovations for global health.",
  openGraph: {
    title: "Research & Development (R&D) | TechInvention",
    description: "Explore TechInvention's research and development initiatives, biotechnology platforms, and scientific innovations for global health.",
    url: "https://impulsedigital.co.in/techinvention/rnd",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research & Development (R&D) | TechInvention",
    description: "Explore TechInvention's research and development initiatives, biotechnology platforms, and scientific innovations for global health.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention/rnd",
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

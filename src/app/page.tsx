import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TechInvention | Advancing Global Health Through Biotechnology",
  description: "Global biotech company focused on vaccines, diagnostics, and biotherapeutics. Innovation that protects tomorrow.",
  openGraph: {
    title: "TechInvention | Advancing Global Health Through Biotechnology",
    description: "Global biotech company focused on vaccines, diagnostics, and biotherapeutics. Innovation that protects tomorrow.",
    url: "https://impulsedigital.co.in/techinvention",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechInvention | Advancing Global Health Through Biotechnology",
    description: "Global biotech company focused on vaccines, diagnostics, and biotherapeutics. Innovation that protects tomorrow.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/techinvention",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../views/Home';

export default function Page() {
  return <PageComponent />;
}

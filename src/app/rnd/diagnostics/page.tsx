import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Diagnostic Platforms & R&D | TechInvention",
  description: "Discover TechInvention's next-generation diagnostic tools, offering molecular precision and rapid detection for global health security.",
  openGraph: {
    title: "Diagnostic Platforms & R&D | TechInvention",
    description: "Discover TechInvention's next-generation diagnostic tools, offering molecular precision and rapid detection for global health security.",
    url: "https://techinvention.com/rnd/diagnostics/",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnostic Platforms & R&D | TechInvention",
    description: "Discover TechInvention's next-generation diagnostic tools, offering molecular precision and rapid detection for global health security.",
  },
  alternates: {
    canonical: "https://techinvention.com/rnd/diagnostics/",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../../../views/Diagnostics';

export default function Page() {
  return <PageComponent />;
}

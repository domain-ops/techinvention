import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Biotech Careers & Pharmaceutical Jobs - TechInvention",
  description: "Career opportunities at TechInvention in vaccine development, biopharmaceutical manufacturing, research, consulting and related fields.",
  openGraph: {
    title: "Biotech Careers & Pharmaceutical Jobs - TechInvention",
    description: "Career opportunities at TechInvention in vaccine development, biopharmaceutical manufacturing, research, consulting and related fields.",
    url: "https://techinvention.com/careers/",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biotech Careers & Pharmaceutical Jobs - TechInvention",
    description: "Career opportunities at TechInvention in vaccine development, biopharmaceutical manufacturing, research, consulting and related fields.",
  },
  alternates: {
    canonical: "https://techinvention.com/careers/",
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

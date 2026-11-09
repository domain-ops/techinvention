import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Awards & Recognition | TechInvention",
  description: "Celebrate TechInvention's achievements, industry awards, and global recognition in biotechnology research and pharmaceutical innovation.",
  openGraph: {
    title: "Awards & Recognition | TechInvention",
    description: "Celebrate TechInvention's achievements, industry awards, and global recognition in biotechnology research and pharmaceutical innovation.",
    url: "https://techinvention.com/awards/",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awards & Recognition | TechInvention",
    description: "Celebrate TechInvention's achievements, industry awards, and global recognition in biotechnology research and pharmaceutical innovation.",
  },
  alternates: {
    canonical: "https://techinvention.com/awards/",
  },
  robots: {
    index: true,
    follow: true,
  },
};
import PageComponent from '../../views/Awards';

export default function Page() {
  return <PageComponent />;
}

import { Metadata } from 'next';
import CsrInitiativesView from '../../../views/CsrInitiatives';

export const metadata: Metadata = {
  title: "CSR Initiatives | About TechInvention",
  description: "Learn about TechInvention's Corporate Social Responsibility (CSR) initiatives, contributions to SARS-CoV-2 research at Punjab University, PM Cares Fund, and startup support.",
  openGraph: {
    title: "CSR Initiatives | About TechInvention",
    description: "Learn about TechInvention's Corporate Social Responsibility (CSR) initiatives, contributions to SARS-CoV-2 research at Punjab University, PM Cares Fund, and startup support.",
    url: "https://impulsedigital.co.in/about/csr-initiatives",
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSR Initiatives | About TechInvention",
    description: "Learn about TechInvention's Corporate Social Responsibility (CSR) initiatives, contributions to SARS-CoV-2 research at Punjab University, PM Cares Fund, and startup support.",
  },
  alternates: {
    canonical: "https://impulsedigital.co.in/about/csr-initiatives",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <CsrInitiativesView />;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Certifications & Compliance | TechInvention",
  description: "Discover TechInvention's regulatory certifications, quality standards, and compliance framework ensuring safe and effective biotech development.",
};

import PageComponent from '../../views/Certification';

export default function Page() {
  return <PageComponent />;
}

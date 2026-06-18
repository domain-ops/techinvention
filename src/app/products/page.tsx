import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Biotech Products & Solutions | TechInvention",
  description: "Browse TechInvention's portfolio of vaccines, rapid diagnostic kits, biotherapeutics, and specialized medical countermeasure solutions.",
};

import PageComponent from '../../views/Products';

export default function Page() {
  return <PageComponent />;
}

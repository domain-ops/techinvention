import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Biotech Consulting Services | TechInvention",
  description: "TechInvention offers end-to-end biotech consulting, from feasibility studies and technology transfers to facility design and compliance.",
};

import PageComponent from '../../views/Consulting';

export default function Page() {
  return <PageComponent />;
}

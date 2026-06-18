import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Strategic & Technical Advisory | TechInvention",
  description: "TechInvention provides strategic, regulatory, and technical advisory services for biotechnology and pharmaceutical manufacturing operations globally.",
};

import PageComponent from '../../views/StrategicTechnicalAdvisory';

export default function Page() {
  return <PageComponent />;
}

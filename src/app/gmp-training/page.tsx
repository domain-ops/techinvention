import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GMP Training & Workforce Development | TechInvention",
  description: "TechInvention's professional Good Manufacturing Practice (GMP) training programs prepare workforce talents for quality-driven biotech manufacturing.",
};

import PageComponent from '../../views/GmpTraining';

export default function Page() {
  return <PageComponent />;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vaccine R&D & Pipelines | TechInvention",
  description: "Read about TechInvention\\'s vaccine development pipeline, including viral vector and mRNA platforms targeting critical global infectious diseases.",
};

import PageComponent from '../../../views/Vaccines';

export default function Page() {
  return <PageComponent />;
}

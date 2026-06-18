import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CDMO Services | TechInvention",
  description: "Explore our Contract Development and Manufacturing Organization (CDMO) services featuring our state-of-the-art GCMC facility, Drug Substance, and Drug Product capabilities.",
};

import PageComponent from '../../views/CDMO';

export default function Page() {
  return <PageComponent />;
}

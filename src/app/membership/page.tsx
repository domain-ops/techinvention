import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Membership & Associations | TechInvention",
  description: "Explore TechInvention's professional memberships, corporate associations, and collaborations in the global biotech and pharmaceutical ecosystem.",
};

import PageComponent from '../../views/Membership';

export default function Page() {
  return <PageComponent />;
}

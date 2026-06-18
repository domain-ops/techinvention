import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Careers at TechInvention | Join Our Biotech Team",
  description: "Explore career opportunities at TechInvention. Join a diverse team of scientists, researchers, and experts advancing global health biotechnology.",
};

import PageComponent from '../../views/Careers';

export default function Page() {
  return <PageComponent />;
}

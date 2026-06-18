import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Research & Development (R&D) | TechInvention",
  description: "Explore TechInvention's research and development initiatives, biotechnology platforms, and scientific innovations for global health.",
};

import PageComponent from '../../views/RND';

export default function Page() {
  return <PageComponent />;
}

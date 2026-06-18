import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Awards & Recognition | TechInvention",
  description: "Celebrate TechInvention's achievements, industry awards, and global recognition in biotechnology research and pharmaceutical innovation.",
};

import PageComponent from '../../views/Awards';

export default function Page() {
  return <PageComponent />;
}

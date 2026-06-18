import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact TechInvention | Global Offices & Inquiries",
  description: "Get in touch with TechInvention. Contact our global headquarters and offices for partnerships, advisory inquiries, and product information.",
};

import PageComponent from '../../views/Contact';

export default function Page() {
  return <PageComponent />;
}

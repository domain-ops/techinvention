import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TechInvention | Advancing Global Health Through Biotechnology",
  description: "Global biotech company focused on vaccines, diagnostics, and biotherapeutics. Innovation that protects tomorrow.",
};

import PageComponent from '../views/Home';

export default function Page() {
  return <PageComponent />;
}

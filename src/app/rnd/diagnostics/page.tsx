import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Diagnostic Platforms & R&D | TechInvention",
  description: "Discover TechInvention's next-generation diagnostic tools, offering molecular precision and rapid detection for global health security.",
};

import PageComponent from '../../../views/Diagnostics';

export default function Page() {
  return <PageComponent />;
}

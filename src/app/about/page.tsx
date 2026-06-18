import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About TechInvention | Our Journey & Vision",
  description: "Learn about TechInvention's journey, vision, mission, and leadership team dedicated to global health innovation and biotechnology solutions.",
};

import PageComponent from '../../views/About';

export default function Page() {
  return <PageComponent />;
}

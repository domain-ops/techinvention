import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Search | TechInvention",
  description: "Search our website to find information about our products, research and development, consulting services, and latest insights.",
};

import React, { Suspense } from 'react';
import PageComponent from '../../views/Search';

export default function Page() {
  return (
    <Suspense fallback={<div className="w-full min-h-[50vh] flex items-center justify-center">Loading search...</div>}>
      <PageComponent />
    </Suspense>
  );
}

import { Metadata } from 'next';
import ThankYouView from '../../views/ThankYou';

export const metadata: Metadata = {
  title: "Thank You | TechInvention",
  description: "Thank you for contacting TechInvention. We have received your submission.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <ThankYouView />;
}

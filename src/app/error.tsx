'use client';

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Something went wrong!</h2>
      <p className="text-slate-600 mb-8 max-w-md">
        An unexpected error occurred. Please try again or return to the home page.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-[#1955A6] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1955A6]/90 transition-colors"
        >
          Try Again
        </button>
        <a
          href="/techinvention/"
          className="border border-[#1955A6] text-[#1955A6] px-6 py-3 rounded-full font-medium hover:bg-[#1955A6]/5 transition-colors"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}

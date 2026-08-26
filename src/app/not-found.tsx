import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-[#1955A6] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-800 mb-4">Page Not Found</h2>
      <p className="text-slate-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="bg-[#1955A6] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1955A6]/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}

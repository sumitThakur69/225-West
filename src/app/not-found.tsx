import Link from "next/link";
import type { Metadata } from 'next';

// SEO Metadata - Fixes indexing issues
export const metadata: Metadata = {
  title: '404 - Page Not Found | 225 West Coworking Space Jaipur',
  description: 'The page you are looking for could not be found. Visit 225 West premium coworking space in Jaipur for flexible workspaces, private offices, and meeting rooms.',
  robots: {
    index: false, // Don't index 404 pages
    follow: true, // But follow links on this page
  },
  alternates: {
    canonical: 'https://225-west.vercel.app',
  },
};

export default function NotFound() {
  return (
    <main className="py-16 min-h-screen bg-linear-to-br flex items-center justify-center px-4">
      <section className="max-w-2xl w-full text-center" aria-labelledby="error-title">

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 py-4">
          <svg
            aria-hidden="true"
            className="text-teal-700 w-12 h-12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
          <h1 id="error-title" className="text-4xl font-bold text-(--west-bg-secondary)">
            225 West
          </h1>
        </div>

        {/* Error Code */}
        <div className="relative mb-8" aria-hidden="true">
          <p className="text-9xl font-bold leading-none select-none">404</p>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Oops! This space isn't available
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto">
            Looks like this page took a coffee break. Let's get you back to a workspace that exists.
          </p>
        </div>

        {/* Actions */}
        <nav className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-teal-700 text-white rounded-full font-medium hover:bg-teal-800 transition-transform hover:scale-105 shadow-lg">
            Back to Home
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-4 py-2 bg-white text-teal-700 border-2 border-teal-700 rounded-full font-medium hover:bg-teal-50 transition-transform hover:scale-105">
            Contact Us
          </Link>
        </nav>

        {/* Quick Links */}
        <nav className="mt-12 pt-8 border-t border-gray-200 text-sm">
          <p className="text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/workspaces" className="text-teal-700 hover:underline">Workspaces</Link>
            <span>•</span>
            <Link href="/events" className="text-teal-700 hover:underline">Events</Link>
            <span>•</span>
            <Link href="/gallery" className="text-teal-700 hover:underline">Gallery</Link>
            <span>•</span>
            <Link href="/about" className="text-teal-700 hover:underline">About Us</Link>
          </div>
        </nav>

      </section>
    </main>
  );
}

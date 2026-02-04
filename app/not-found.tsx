import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-emergency-red mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-2">Page not found</p>
        <p className="text-slate-500 mb-8">
          This page doesn't exist. Let's get you back to safety.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-emergency-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-emergency-blue-dark transition-colors"
        >
          <Home className="w-5 h-5" />
          Return Home
        </Link>
      </div>
    </div>
  );
}

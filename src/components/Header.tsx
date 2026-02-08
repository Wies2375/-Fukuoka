"use client";

import Link from "next/link";
import { siteConfig } from "@/data/tours";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-autumn-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold text-primary">
          {siteConfig.siteName}
        </Link>
        <nav className="flex items-center gap-6">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

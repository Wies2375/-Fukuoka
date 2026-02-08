import { siteConfig } from "@/data/tours";

export default function Hero() {
  return (
    <section className="relative border-b border-autumn-200 bg-gradient-to-b from-autumn-50 to-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent-light">
          感受秋日浪漫
        </p>
        <h1 className="mb-3 text-4xl font-serif tracking-tight text-primary md:text-5xl lg:text-6xl">
          {siteConfig.heroTitleZh}
        </h1>
        <h2 className="mb-6 text-xl font-semibold text-gray-800 md:text-2xl">
          {siteConfig.heroTitle}
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
          {siteConfig.heroDescription}
        </p>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#fff7ed" />
              <stop offset="100%" stopColor="#fff1e0" />
            </linearGradient>
          </defs>
          <rect width="1440" height="320" fill="url(#g)" />
        </svg>
      </div>
    </section>
  );
}

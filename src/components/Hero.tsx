import { siteConfig } from "@/data/tours";

export default function Hero() {
  return (
    <section className="relative border-b border-gray-200 bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
          Explore your trip.
        </p>
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
          {siteConfig.heroTitle}
        </h1>
        <h2 className="mb-6 text-3xl font-semibold text-gray-800 md:text-4xl">
          {siteConfig.heroTitleZh}
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
          {siteConfig.heroDescription}
        </p>
      </div>
    </section>
  );
}

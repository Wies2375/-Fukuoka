import Image from "next/image";
import type { ItineraryDay } from "@/data/tours";

interface ItinerarySectionProps {
  days: ItineraryDay[];
}

export default function ItinerarySection({ days }: ItinerarySectionProps) {
  return (
    <section id="itinerary" className="border-t border-autumn-200 bg-autumn-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-2xl font-bold text-primary md:text-3xl">
          每日行程
        </h2>
        <div className="space-y-12">
          {days.map((d) => (
            <article
              key={d.day}
              id={`day-${d.day}`}
              className="overflow-hidden rounded-xl border border-autumn-200 bg-white autumn-shadow"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[240px]">
                  <Image
                    src={d.image}
                    alt={`Day ${d.day} ${d.title}`}
                    fill
                    className="object-cover autumn-image"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <p className="mb-1 text-sm font-medium text-accent">
                    Day {d.day}（{d.date}）
                  </p>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    {d.title}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {d.content.map((paragraph, i) => (
                      <li key={i} className="leading-relaxed">
                        {paragraph}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

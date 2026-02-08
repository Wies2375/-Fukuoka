import Image from "next/image";
import type { Tour } from "@/data/tours";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-autumn-200 bg-white autumn-shadow transition hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {/* 若圖片尚未放置，會顯示灰色底；請將圖片放到 public/images/ 對應檔名 */}
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover transition group-hover:scale-105 autumn-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>
      <div className="p-5 md:p-6">
        <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900 md:text-xl">
          {tour.title}
        </h3>
        <p className="mb-4 text-sm text-gray-600">{tour.subtitle}</p>
        <p className="mb-4 text-xl font-semibold text-primary">{tour.price}</p>
        {tour.detailLink && (
          <a
            href={tour.detailLink}
            className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-light"
          >
            行程特色
          </a>
        )}
        <div className="mt-4 flex flex-wrap gap-4 border-t border-gray-100 pt-4">
          {tour.dateGroups.map((group) => (
            <div key={group.month} className="flex flex-col gap-1">
              <span className="text-xs font-medium uppercase text-gray-500">
                {group.month}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.dates.map((d) => (
                  <span
                    key={d}
                    className="rounded px-2 py-0.5 text-sm text-gray-700 autumn-badge"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

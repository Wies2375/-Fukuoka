// src/components/Hero.tsx
type HeroProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  imageUrl: string;
};

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  imageUrl,
}: HeroProps) {
  return (
    <section className="relative">
      {/* 背景大圖 */}
      <div className="relative h-[72vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt=""
          className="h-full w-full object-cover"
        />
        {/* 秋天氛圍：暖色光暈 + 微暗角 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-autumn-bg/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(196,106,43,0.35),transparent_45%)]" />
      </div>

      {/* 中央資訊卡（Wix 味道核心） */}
      <div className="absolute inset-x-0 top-[58%] -translate-y-1/2 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-xl rounded-xl2 bg-autumn-card/95 p-7 shadow-soft backdrop-blur">
            <p className="text-sm tracking-widest text-autumn-muted">
              AUTUMN TRIP COLLECTION
            </p>
            <h1 className="mt-2 text-3xl font-semibold leading-tight text-autumn-ink md:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-autumn-muted">
              {subtitle}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-autumn-accent px-6 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                {ctaText}
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full border border-autumn-line bg-autumn-card px-6 py-3 text-sm font-medium text-autumn-ink hover:bg-autumn-bg"
              >
                查看照片
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero 下方留白銜接 */}
      <div className="h-24 md:h-28" />
    </section>
  );
}

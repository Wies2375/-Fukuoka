import Hero from "@/components/Hero";
import TourCard from "@/components/TourCard";
import ItinerarySection from "@/components/ItinerarySection";
import { tours, itineraryDays } from "@/data/tours";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="tours" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>
      <ItinerarySection days={itineraryDays} />
    </>
  );
}

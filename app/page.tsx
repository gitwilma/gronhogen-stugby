import type { Metadata } from "next";
import { CottagesSection } from "./components/cottages/CottagesSection";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { BookingSection } from "./sections/Booking/BookingSection";
import { CampingSection } from "./sections/Camping/CampingSection";
import { CottageCarouselSection } from "./sections/CottageCarousel/CottageCarouselSection";
import { GallerySection } from "./sections/Gallery/GallerySection";
import { GroupBookingSection } from "./sections/GroupBooking/GroupBookingSection";
import { HeroSection } from "./sections/Hero/HeroSection";
import { InfoSection } from "./sections/Info/InfoSection";
import { OtherAccommodationSection } from "./sections/OtherAccommodationSection/OtherAccommodationSection";
// import { TipsSection } from "./sections/Tips/TipsSection";

export const metadata: Metadata = {
  title: "Grönhögens Uthyrning — Stugor i Grönhögen, södra Öland",
  description:
    "Stugor och boenden i Grönhögen på södra Öland. Hyr mysiga stugor nära hav, naturupplevelser och populära utflyktsmål — boka direkt hos Grönhögens Uthyrning.",
  alternates: { canonical: "https://gronhogensuthyrning.se/" },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CottagesSection />
        <GroupBookingSection />
        <OtherAccommodationSection />
        <BookingSection />
        <CottageCarouselSection />
        <CampingSection />
        {/* <TipsSection /> */}
        <InfoSection />
        <GallerySection />
        <Footer />
      </main>
    </>
  );
}

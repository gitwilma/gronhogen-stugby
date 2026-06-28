import { CottagesSection } from "./components/cottages/CottagesSection";
import { Header } from "./components/layout/Header";
import { BookingSection } from "./sections/Booking/BookingSection";
import { GallerySection } from "./sections/Gallery/GallerySection";
import { GroupBookingSection } from "./sections/GroupBooking/GroupBookingSection";
import { HeroSection } from "./sections/Hero/HeroSection";
import { InfoSection } from "./sections/Info/InfoSection";
import { OtherAccommodationSection } from "./sections/OtherAccommodationSection/OtherAccommodationSection";
import { TipsSection } from "./sections/Tips/TipsSection";

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
        <TipsSection />
        <InfoSection />
        <GallerySection />
      </main>
    </>
  );
}
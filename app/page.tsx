import { CottagesSection } from "./components/cottages/CottagesSection";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./sections/Hero/HeroSection";
import { InfoSection } from "./sections/Info/InfoSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CottagesSection />
        <InfoSection />
      </main>
    </>
  );
}
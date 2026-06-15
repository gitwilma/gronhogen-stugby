import { Header } from "./components/layout/Header";
import { HeroSection } from "./sections/Hero/HeroSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
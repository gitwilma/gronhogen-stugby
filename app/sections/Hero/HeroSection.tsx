import { PageContainer } from "@/app/components/layout/PageContainer";
import { Button } from "@/app/components/ui/Button";

export const HeroSection = () => {
  return (
    <section className="min-h-[80vh] bg-[#f4f0e8] py-10">
      <PageContainer>
        <div className="grid min-h-[70vh] items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em]">
              Grönhögen, Öland
            </p>

            <h1 className="max-w-3xl text-5xl font-normal leading-tight md:text-7xl">
              Bo nära naturen, havet och äventyren.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-700">
              En enkel och naturnära stugby på södra Öland, med närhet till hav,
              golf, cykelleder och några av öns mest uppskattade utflyktsmål.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#stugor">Se våra stugor</Button>
              <Button href="#kontakt">Kontakta oss</Button>
            </div>
          </div>

          <div className="min-h-[420px] rounded-3xl bg-white/60" aria-hidden="true" />
        </div>
      </PageContainer>
    </section>
  );
};
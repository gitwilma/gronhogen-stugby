import { PageContainer } from "@/app/components/layout/PageContainer";
import { Button } from "@/app/components/ui/Button";
import Image from "next/image";
import {
  HeroActions,
  HeroContent,
  HeroEyebrow,
  HeroImage,
  HeroIntro,
  HeroMedia,
  HeroSectionWrapper,
  HeroTitle,
} from "./HeroSection.styles";

export const HeroSection = () => {
  return (
    <HeroSectionWrapper id="hem" aria-labelledby="hero-title">
      <HeroMedia>
        <Image
          src="/assets/nature/lighthouse_02.jpeg"
          alt="Långe Jan fyr vid solnedgång på södra Öland"
          fill
          priority
          sizes="100vw"
        />
      </HeroMedia>

      <HeroImage aria-hidden="true" />

      <PageContainer>
        <HeroContent>
          <HeroEyebrow>På södra Öland</HeroEyebrow>

          <HeroTitle id="hero-title">
            Bo nära naturen, havet och äventyren.
          </HeroTitle>

          <HeroIntro>
            Grönhögens stugby består av 11 mysiga stugor med närhet till vackra
            stränder, Långe Jan, golf, cykelleder och mycket mer.
          </HeroIntro>

          <HeroActions aria-label="Snabblänkar">
            <Button href="#stugor">Våra stugor</Button>
          </HeroActions>
        </HeroContent>
      </PageContainer>
    </HeroSectionWrapper>
  );
};

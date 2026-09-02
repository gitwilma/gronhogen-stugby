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
          src="/assets/nature/lighthouse-new_02.webp"
          alt="Långe Jan fyr vid solnedgång på södra Öland"
          fill
          priority
          sizes="100vw"
          style={{ aspectRatio: "16/9" }}
        />
      </HeroMedia>

      <HeroImage aria-hidden="true" />

      <PageContainer>
        <HeroContent>
          <HeroEyebrow>Grönhögens Uthyrning</HeroEyebrow>

          <HeroTitle id="hero-title">
            Bo nära naturen och havet på <br />södra Öland
          </HeroTitle>

          <HeroIntro>
            Hos Grönhögens Uthyrning hittar du stugor, lägenhet och camping på
            södra Öland, med närhet till hav, natur, Långe Jan, golf och
            cykelleder.
          </HeroIntro>

          <HeroActions aria-label="Snabblänkar">
            <Button href="#stugor">Våra boenden</Button>
          </HeroActions>
        </HeroContent>
      </PageContainer>
    </HeroSectionWrapper>
  );
};

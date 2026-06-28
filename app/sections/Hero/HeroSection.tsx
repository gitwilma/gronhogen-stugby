import { PageContainer } from "@/app/components/layout/PageContainer";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { Button } from "@/app/components/ui/Button";
import Image from "next/image";
import {
  HeroActions,
  HeroContent,
  HeroEyebrow,
  HeroIntro,
  HeroLayout,
  HeroTitle,
  HeroVisual,
} from "./HeroSection.styles";

export const HeroSection = () => {
  return (
    <SectionContainer id="hem" aria-labelledby="hero-title">
      <PageContainer>
        <HeroLayout>
          <HeroContent>
            <HeroTitle id="hero-title">
              Bo nära naturen, havet och äventyren.
            </HeroTitle>

            <HeroEyebrow>På södra Öland</HeroEyebrow>

            <HeroIntro>
              Grönhögens stugby består av 11 mysiga stugor med närhet till
              vackra stränder, Långe Jan, golf, cykelleder och mycket mer.
            </HeroIntro>

            <HeroActions aria-label="Snabblänkar">
              <Button href="#stugor">Våra stugor</Button>
            </HeroActions>
          </HeroContent>

          <HeroVisual>
            <Image
              src="/assets/nature/lighthouse_02.jpeg"
              alt="Långe Jan fyr vid solnedgång på södra Öland"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </HeroVisual>
        </HeroLayout>
      </PageContainer>
    </SectionContainer>
  );
};

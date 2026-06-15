import { PageContainer } from "@/app/components/layout/PageContainer";
import { Button } from "@/app/components/ui/Button";
import {
  HeroActions,
  HeroContent,
  HeroEyebrow,
  HeroIntro,
  HeroLayout,
  HeroSectionWrapper,
  HeroTitle,
} from "./HeroSection.styles";

export const HeroSection = () => {
  return (
    <HeroSectionWrapper id="hem" aria-labelledby="hero-title">
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
        </HeroLayout>
      </PageContainer>
    </HeroSectionWrapper>
  );
};

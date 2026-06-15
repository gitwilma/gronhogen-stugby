import { PageContainer } from "@/app/components/layout/PageContainer";
import { Button } from "@/app/components/ui/Button";
import {
  HeroActions,
  HeroContent,
  HeroEyebrow,
  HeroImagePlaceholder,
  HeroIntro,
  HeroLayout,
  HeroSectionWrapper,
  HeroTitle,
  HeroVisual,
} from "./HeroSection.styles";

export const HeroSection = () => {
  return (
    <HeroSectionWrapper aria-labelledby="hero-title">
      <PageContainer>
        <HeroLayout>
          <HeroContent>
            <HeroEyebrow>Grönhögen, Öland</HeroEyebrow>

            <HeroTitle id="hero-title">
              Bo nära naturen, havet och äventyren.
            </HeroTitle>

            <HeroIntro>
              En naturnära stugby på södra Öland med närhet till hav, golf,
              cykelleder och några av öns mest uppskattade utflyktsmål.
            </HeroIntro>

            <HeroActions aria-label="Snabblänkar">
              <Button href="#stugor">Se våra stugor</Button>
              <Button href="#kontakt">Kontakta oss</Button>
            </HeroActions>
          </HeroContent>

          <HeroVisual>
            <HeroImagePlaceholder aria-hidden="true" />
            <figcaption className="sr-only">
              Bild från Grönhögens Stugby på södra Öland.
            </figcaption>
          </HeroVisual>
        </HeroLayout>
      </PageContainer>
    </HeroSectionWrapper>
  );
};

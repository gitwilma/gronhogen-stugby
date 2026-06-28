import { PageContainer } from "@/app/components/layout/PageContainer";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { Button } from "@/app/components/ui/Button";
import {
  OtherAccommodationContent,
  OtherAccommodationEyebrow,
  OtherAccommodationFeature,
  OtherAccommodationFeatures,
  OtherAccommodationImage,
  OtherAccommodationImageWrapper,
  OtherAccommodationLayout,
  OtherAccommodationText,
  OtherAccommodationTitle,
} from "./OtherAccommodationSection.styles";

export const OtherAccommodationSection = () => {
  return (
    <SectionContainer aria-labelledby="other-accommodation-title">
      <PageContainer>
        <OtherAccommodationLayout>
          <OtherAccommodationContent>
            <OtherAccommodationEyebrow>
              Ett annat boende
            </OtherAccommodationEyebrow>

            <OtherAccommodationTitle id="other-accommodation-title">
              Vad stugan kallas
            </OtherAccommodationTitle>

            <OtherAccommodationText>
              En charmig stuga belägen en kort bit från Grönhögens Stugby.
              Perfekt för dig som vill bo lite avskilt men ändå nära naturen och
              havet.
            </OtherAccommodationText>

            <OtherAccommodationFeatures aria-label="Information om Stuga vid havet">
              <OtherAccommodationFeature>4 bäddar</OtherAccommodationFeature>
              <OtherAccommodationFeature>
                Havsnära läge
              </OtherAccommodationFeature>
              <OtherAccommodationFeature>Egen tomt</OtherAccommodationFeature>
            </OtherAccommodationFeatures>

            <Button href="https://www.airbnb.se/" external>
              Visa på Airbnb
            </Button>
          </OtherAccommodationContent>

          <OtherAccommodationImageWrapper>
            <OtherAccommodationImage
              src="/images/other-accommodation/stuga-vid-havet.jpg"
              alt="Stuga vid havet i solnedgång nära kusten"
            />
          </OtherAccommodationImageWrapper>
        </OtherAccommodationLayout>
      </PageContainer>
    </SectionContainer>
  );
};

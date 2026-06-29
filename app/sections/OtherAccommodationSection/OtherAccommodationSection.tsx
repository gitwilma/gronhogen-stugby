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
              Lägenhet i Grönhögen
            </OtherAccommodationEyebrow>

            <OtherAccommodationTitle id="other-accommodation-title">
              Fasanhörnet
            </OtherAccommodationTitle>

            <OtherAccommodationText>
              En charmig lägenhet i centrala Grönhögen, belägen i en före detta
              ateljé med lugnt läge och närhet till havet, badplats och
              golfbana. Med plats för upp till fyra gäster är det ett perfekt
              boende för dig som vill uppleva södra Ölands natur och avkopplande
              bymiljö.
            </OtherAccommodationText>

            <OtherAccommodationFeatures aria-label="Information om Stuga vid havet">
              <OtherAccommodationFeature>4 bäddar</OtherAccommodationFeature>
              <OtherAccommodationFeature>
                Havsnära läge
              </OtherAccommodationFeature>
            </OtherAccommodationFeatures>

            <Button href="https://www.airbnb.se/rooms/49065189" external>
              Visa på Airbnb
            </Button>
          </OtherAccommodationContent>

          <OtherAccommodationImageWrapper>
            <OtherAccommodationImage
              src="/assets/cottages/otherAccommodation.jpeg" // CHANGE IMAGE
              alt="Stuga vid havet i solnedgång nära kusten"
            />
          </OtherAccommodationImageWrapper>
        </OtherAccommodationLayout>
      </PageContainer>
    </SectionContainer>
  );
};

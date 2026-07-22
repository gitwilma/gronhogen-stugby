import { PageContainer } from "@/app/components/layout/PageContainer";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { Button } from "@/app/components/ui/Button";
import {
  OtherAccommodationContent,
  OtherAccommodationEyebrow,
  OtherAccommodationFeature,
  OtherAccommodationFeatures,
  OtherAccommodationImage,
  OtherAccommodationImageCaption,
  OtherAccommodationImageOverlay,
  OtherAccommodationImageWrapper,
  OtherAccommodationLayout,
  OtherAccommodationText,
  OtherAccommodationTitle,
} from "./OtherAccommodationSection.styles";

const airbnbUrl = "https://www.airbnb.se/rooms/49065189";

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

            <OtherAccommodationFeatures aria-label="Information om Fasanhörnet">
              <OtherAccommodationFeature>4 gäster</OtherAccommodationFeature>
              <OtherAccommodationFeature>1 sovrum</OtherAccommodationFeature>
              <OtherAccommodationFeature>3 sängar</OtherAccommodationFeature>
              <OtherAccommodationFeature>1,5 badrum</OtherAccommodationFeature>
            </OtherAccommodationFeatures>

            <Button href={airbnbUrl} external>
              Visa på Airbnb
            </Button>
          </OtherAccommodationContent>

          <div>
            <OtherAccommodationImageWrapper
              href={airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Se fler bilder och information om Fasanhörnet på Airbnb"
            >
              <OtherAccommodationImage
                src="/assets/cottages/otherAccommodation.webp"
                alt="Fasanhörnet i centrala Grönhögen"
                width={1200}
                height={675}
                sizes="(max-width: 900px) 100vw, 65vw"
              />

              <OtherAccommodationImageOverlay aria-hidden="true">
                Se fler bilder på Airbnb
              </OtherAccommodationImageOverlay>
            </OtherAccommodationImageWrapper>

            <OtherAccommodationImageCaption>
              Klicka på bilden för att se fler bilder på Airbnb.
            </OtherAccommodationImageCaption>
          </div>
        </OtherAccommodationLayout>
      </PageContainer>
    </SectionContainer>
  );
};

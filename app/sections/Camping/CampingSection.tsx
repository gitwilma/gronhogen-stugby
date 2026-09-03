import { PageContainer } from "@/app/components/layout/PageContainer";
import { siteData } from "@/app/data/site";
import {
  CampingCard,
  CampingContent,
  CampingDescription,
  CampingHeading,
  CampingIcon,
  CampingLink,
  CampingTitle,
} from "@/app/sections/Camping/CampingSection.styles";
import { Caravan } from "lucide-react";

export const CampingSection = () => {
  return (
    <PageContainer>
      <CampingCard aria-labelledby="camping-title">
        <CampingIcon aria-hidden="true">
          <Caravan size={36} />
        </CampingIcon>

        <CampingContent>
          <CampingHeading id="camping-title">
            Nybovallens Camping
          </CampingHeading>

          <CampingTitle>
            Vi erbjuder även campingplatser i Grönhögen, i närheten av våra
            övriga boenden.
          </CampingTitle>

          <CampingDescription>
            På campingen finns även enkla containerrum med delat kök, dusch
            och toalett — perfekt för den som nöjer sig med det lilla.{" "}
            <CampingLink
              href="https://www.airbnb.se/rooms/1488449966045538160"
              target="_blank"
              rel="noopener noreferrer"
            >
              Se rum på Airbnb
            </CampingLink>
          </CampingDescription>

          <CampingDescription>
            <strong>Adress:</strong> Grönhögen 143, 380 65 Degerhamn
          </CampingDescription>

          <CampingDescription>
            För frågor om tillgänglighet och bokning,{" "}
            <CampingLink href={`mailto:${siteData.email}`}>
              kontakta oss
            </CampingLink>
            .
          </CampingDescription>
        </CampingContent>
      </CampingCard>
    </PageContainer>
  );
};

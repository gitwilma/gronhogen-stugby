import { PageContainer } from "@/app/components/layout/PageContainer";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
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
import { Tent } from "lucide-react";

export const CampingSection = () => {
  return (
      <PageContainer>
        <CampingCard aria-labelledby="camping-title">
          <CampingIcon aria-hidden="true">
            <Tent size={36} />
          </CampingIcon>

          <CampingContent>
            <CampingHeading id="camping-title">
              Camping i Grönhögen
            </CampingHeading>

            <CampingTitle>
              Vi erbjuder även campingplatser i Grönhögen, i närheten av våra
              övriga boenden.
            </CampingTitle>

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

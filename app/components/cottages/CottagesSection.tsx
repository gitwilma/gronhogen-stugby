import { PageContainer } from "@/app/components/layout/PageContainer";
import { CottageCard } from "@/app/components/cottages/CottageCard";
import { cottages } from "@/app/data/cottages";
import {
  CottagesGrid,
  CottagesHeader,
  CottagesIntro,
  CottagesTitle,
} from "./CottagesSection.styles";
import { BookingSection } from "@/app/sections/Booking/BookingSection";
import { SectionContainer } from "../layout/SectionContainer";

export const CottagesSection = () => {
  return (
    <SectionContainer id="stugor" aria-labelledby="cottages-title">
      <PageContainer>
        <CottagesHeader>
          <CottagesTitle id="cottages-title">Våra stugor</CottagesTitle>
          <CottagesIntro>
            Här hittar du våra stugor. Klicka vidare till Airbnb för att se
            aktuella datum, priser och bokning.
          </CottagesIntro>
        </CottagesHeader>

        <CottagesGrid>
          {cottages.map((cottage) => (
            <li key={cottage.id}>
              <CottageCard cottage={cottage} />
            </li>
          ))}
        </CottagesGrid>
      </PageContainer>
    </SectionContainer>
  );
};

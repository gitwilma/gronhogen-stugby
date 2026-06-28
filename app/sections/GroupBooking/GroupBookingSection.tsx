import { PageContainer } from "@/app/components/layout/PageContainer";
import { siteData } from "@/app/data/site";
import {
  ContactList,
  ContactLink,
  GroupBookingCard,
  GroupBookingContent,
  GroupBookingSectionWrapper,
  GroupBookingText,
  GroupBookingTitle,
} from "./GroupBookingSection.styles";

export const GroupBookingSection = () => {
  return (
    <GroupBookingSectionWrapper aria-labelledby="group-booking-title">
      <PageContainer>
        <GroupBookingCard>
          <GroupBookingContent>
            <GroupBookingTitle id="group-booking-title">
              Abonnera hela stugbyn
            </GroupBookingTitle>

            <GroupBookingText>
              Vill du samla familjen, vännerna eller kollegorna? Hyr hela
              stugbyn med alla 11 stugor exklusivt för er. Perfekt för bröllop,
              släktträffar, företagsevent eller andra speciella tillfällen.
            </GroupBookingText>

            <ContactList aria-label="Kontakt för abonnemang">
              <li>
                <ContactLink href={`tel:${siteData.phone.replaceAll(" ", "")}`}>
                  {siteData.phone}
                </ContactLink>
              </li>

              <li>
                <ContactLink href={`mailto:${siteData.email}`}>
                  {siteData.email}
                </ContactLink>
              </li>
            </ContactList>
          </GroupBookingContent>
        </GroupBookingCard>
      </PageContainer>
    </GroupBookingSectionWrapper>
  );
};

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
              Reser ni ett större sällskap?
            </GroupBookingTitle>

            <GroupBookingText>
              Abonnera hela stugbyn eller boka flera stugor samtidigt. Skicka
              ett mejl till oss med era önskemål, så hjälper vi er att hitta den
              lösning som passar er bäst.
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

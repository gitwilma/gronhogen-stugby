import { PageContainer } from "@/app/components/layout/PageContainer";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { Button } from "@/app/components/ui/Button";
import { siteData } from "@/app/data/site";
import {
  BookingCard,
  BookingContent,
  BookingDescription,
  BookingIcon,
  BookingTitle,
} from "./BookingSection.styles";

export const BookingSection = () => {
  return (
    <SectionContainer aria-labelledby="booking-title">
      <PageContainer>
        <BookingCard>
          <h2 id="booking-title" className="sr-only">
            Boka via Airbnb
          </h2>

          <BookingIcon
            src="/assets/Airbnb-Emblem.webp"
            alt=""
            aria-hidden="true"
            width={80}
            height={80}
            sizes="80px"
          />

          <BookingContent>
            <BookingTitle>
              Se aktuell tillgänglighet och boka direkt via Airbnb
            </BookingTitle>

            <BookingDescription>
              Vi använder Airbnb för all bokning.
            </BookingDescription>
          </BookingContent>

          <Button href={siteData.airbnbProfileUrl} external>
            Till Airbnb
          </Button>
        </BookingCard>
      </PageContainer>
    </SectionContainer>
  );
};

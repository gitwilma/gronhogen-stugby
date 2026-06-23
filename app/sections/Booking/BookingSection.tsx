import { Button } from "@/app/components/ui/Button";
import {
  BookingContent,
  BookingDescription,
  BookingIcon,
  BookingSectionWrapper,
  BookingTitle,
} from "./BookingSection.styles";

export const BookingSection = () => {
  return (
    <BookingSectionWrapper aria-labelledby="booking-title">
      <h2 id="booking-title" className="sr-only">
        Boka via Airbnb
      </h2>

      <BookingIcon src="/assets/Airbnb-Emblem.png" alt="" aria-hidden="true" />

      <BookingContent>
        <BookingTitle>
          Se aktuell tillgänglighet och boka direkt via Airbnb
        </BookingTitle>

        <BookingDescription>
          Vi använder Airbnb för all bokning.
        </BookingDescription>
      </BookingContent>

      <Button href="https://www.airbnb.se/" external>
        Till Airbnb
      </Button>
    </BookingSectionWrapper>
  );
};

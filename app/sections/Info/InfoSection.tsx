import { Button } from "@/app/components/ui/Button";
import { siteData } from "@/app/data/site";
import Image from "next/image";
import {
  ContactImage,
  ContactItem,
  ContactList,
  ContactPanel,
  ContactText,
  InfoGrid,
  LocationAddress,
  LocationDetails,
  LocationIntro,
  MapFrame,
  MapWrapper,
  NearbyItem,
  NearbyList,
  SectionTitle,
} from "./InfoSection.styles";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { PageContainer } from "@/app/components/layout/PageContainer";

export const InfoSection = () => {
  return (
    <SectionContainer id="hitta-hit" aria-labelledby="location-title">
      <PageContainer>
        <InfoGrid>
          <LocationDetails aria-labelledby="location-title">
            <SectionTitle id="location-title">Hitta hit</SectionTitle>

            <LocationIntro>
              Grönhögens Stugby ligger på södra Öland, nära havet och naturen.
            </LocationIntro>

            <LocationAddress>
              <strong>Grönhögens Stugby</strong>
              <span>{siteData.address.street}</span>
              <span>
                {siteData.address.postalCode} {siteData.address.city}
              </span>
            </LocationAddress>

            <NearbyList aria-label="Platser i närheten">
              {siteData.nearbyPlaces.map((place) => (
                <NearbyItem key={place.name}>
                  <span>{place.name}</span>
                  <strong>{place.distance}</strong>
                </NearbyItem>
              ))}
            </NearbyList>
          </LocationDetails>

          <MapWrapper aria-label="Karta till Grönhögens Stugby">
            <MapFrame
              title="Karta till Grönhögens Stugby"
              src="https://www.google.com/maps?q=Gr%C3%B6nh%C3%B6gens%20Stugby%20Syr%C3%A9nv%C3%A4gen%202%20380%2065%20Degerhamn&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapWrapper>

          <ContactPanel id="kontakt" aria-labelledby="contact-title">
            <SectionTitle id="contact-title">Kontakt</SectionTitle>

            <ContactText>Har du frågor? Hör gärna av dig!</ContactText>

            <ContactList aria-label="Kontaktuppgifter">
              <ContactItem>
                <span aria-hidden="true">☎</span>
                <a href={`tel:${siteData.phone.replaceAll(" ", "")}`}>
                  {siteData.phone}
                </a>
              </ContactItem>

              <ContactItem>
                <span aria-hidden="true">✉</span>
                <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
              </ContactItem>

              <ContactItem>
                <span aria-hidden="true">⌖</span>
                <address>
                  {siteData.address.street}, {siteData.address.postalCode}{" "}
                  {siteData.address.city}
                </address>
              </ContactItem>
            </ContactList>

            <Button href={siteData.airbnbProfileUrl} external>
              Till Airbnb
            </Button>

            <ContactImage>
              <Image
                src="/assets/nature/nature_01.jpeg"
                alt="Natur i närheten av Grönhögens Stugby på södra Öland"
                fill
                sizes="(max-width: 1100px) 100vw, 320px"
              />
            </ContactImage>
          </ContactPanel>
        </InfoGrid>
      </PageContainer>
    </SectionContainer>
  );
};

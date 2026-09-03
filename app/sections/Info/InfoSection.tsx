"use client";

import { PageContainer } from "@/app/components/layout/PageContainer";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { Button } from "@/app/components/ui/Button";
import { siteData } from "@/app/data/site";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  ContactImage,
  ContactItem,
  ContactList,
  ContactPanel,
  ContactText,
  GuideLink,
  GuideText,
  GuideTitle,
  GuideWrapper,
  InfoGrid,
  LocationAddress,
  LocationDetails,
  LocationIntro,
  MapFrame,
  MapPlaceholder,
  MapWrapper,
  NearbyItem,
  NearbyList,
  NearbyTitle,
  SectionTitle,
} from "./InfoSection.styles";

export const InfoSection = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <SectionContainer id="hitta-hit" aria-labelledby="location-title">
      <PageContainer>
        <InfoGrid>
          <LocationDetails aria-labelledby="location-title">
            <SectionTitle id="location-title">Hitta hit</SectionTitle>

            <LocationIntro>
              Grönhögens Uthyrning ligger på södra Öland, nära havet och
              naturen.
            </LocationIntro>

            <LocationAddress>
              <strong>Grönhögens Stugby</strong>
              <span>{siteData.address.street}</span>
              <span>
                {siteData.address.postalCode} {siteData.address.city}
              </span>
            </LocationAddress>

            <LocationAddress>
              <strong>Nybovallens Camping</strong>
              <span>Grönhögen 143</span>
              <span>380 65 Degerhamn</span>
            </LocationAddress>

            <GuideWrapper>
              <BookOpen size={20} strokeWidth={1.8} aria-hidden="true" />

              <div>
                <GuideTitle>Vår guide till södra Öland</GuideTitle>

                <GuideText>
                  Upptäck våra tips på sevärdheter, restauranger och andra
                  favoriter i närheten.
                </GuideText>

                <GuideLink
                  href="https://www.airbnb.se/s/guidebooks?refinement_paths[]=/guidebooks/3466130"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Se vår guide <span aria-hidden="true">→</span>
                </GuideLink>

                <NearbyTitle style={{ marginTop: 12 }}>I närheten</NearbyTitle>

                <NearbyList aria-label="Platser i närheten">
                  {siteData.nearbyPlaces.map((place, index) => (
                    <NearbyItem key={place}>
                      {place}
                      {index < siteData.nearbyPlaces.length - 1 ? " · " : ""}
                    </NearbyItem>
                  ))}
                </NearbyList>
              </div>
            </GuideWrapper>
          </LocationDetails>

          <MapWrapper aria-label="Karta till Grönhögens Stugby">
            {!mapLoaded ? (
              <MapPlaceholder
                onClick={() => setMapLoaded(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setMapLoaded(true);
                  }
                }}
              >
                <div>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p>Klicka för att ladda karta - Grönhögens Stugby</p>
                </div>
              </MapPlaceholder>
            ) : (
              <MapFrame
                title="Karta till Grönhögens Stugby"
                src="https://www.google.com/maps?q=Gr%C3%B6nh%C3%B6gens%20Stugby%20Syr%C3%A9nv%C3%A4gen%202%20380%2065%20Degerhamn&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
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
                src="/assets/nature/nature_01.webp"
                alt="Natur i närheten av Grönhögens Stugby på södra Öland"
                fill
                sizes="(max-width: 1100px) 100vw, 320px"
                style={{ aspectRatio: "4/3" }}
              />
            </ContactImage>
          </ContactPanel>
        </InfoGrid>
      </PageContainer>
    </SectionContainer>
  );
};

"use client";

import { CottageCard } from "@/app/components/cottages/CottageCard";
import { PageContainer } from "@/app/components/layout/PageContainer";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { cottages } from "@/app/data/cottages";
import { siteData } from "@/app/data/site";
import { spacing } from "@/app/theme/spacing";
import { useEffect, useRef, useState } from "react";
import {
  CottagesActions,
  CottagesCarouselButton,
  CottagesCarouselHeader,
  CottagesDivider,
  CottagesEyebrow,
  CottagesHeader,
  CottagesIntro,
  CottagesList,
  CottagesPagination,
  CottagesPaginationDot,
  CottagesTitle,
  MobileShowMore,
} from "./CottagesSection.styles";

const getItemsPerPage = (container?: HTMLElement | null) => {
  if (container) {
    const containerRect = container.getBoundingClientRect();
    const card = container.querySelector("li");
    if (!card) return 1;

    const cardRect = card.getBoundingClientRect();
    const computed = window.getComputedStyle(container as Element);
    const gapRaw = (computed.columnGap ||
      computed.getPropertyValue("grid-column-gap") ||
      "24px") as string;
    const gap = Number.parseFloat(gapRaw) || 24;

    if (window.innerWidth <= 560) return cottages.length;

    const perPage = Math.max(
      1,
      Math.floor((containerRect.width + gap) / (cardRect.width + gap)),
    );
    return perPage;
  }

  if (typeof window === "undefined") return 5;
  if (window.innerWidth <= 560) return cottages.length;
  if (window.innerWidth <= 800) return 2;
  if (window.innerWidth <= 1200) return 3;
  return 5;
};

export const CottagesSection = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [mobileCollapsed, setMobileCollapsed] = useState(true);
  const [mobileMaxHeight, setMobileMaxHeight] = useState<number | null>(null);

  const totalPages = Math.ceil(cottages.length / itemsPerPage);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentPage(0);

      if (listRef.current) {
        listRef.current.scrollTo({ left: 0 });
      }
    };

    updateItemsPerPage();

    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  // Compute mobile collapsed max-height so 2.5 items are visible (half of 3rd)
  useEffect(() => {
    const computeMobileMaxHeight = () => {
      if (!listRef.current) return setMobileMaxHeight(null);
      if (window.innerWidth > 560) return setMobileMaxHeight(null);

      const first = listRef.current.querySelector("li");
      if (!first) return setMobileMaxHeight(null);

      const cardHeight = first.getBoundingClientRect().height;
      const gap = Number.parseFloat(spacing.lg) || 24;

      // Show two full cards + half of the third
      const maxHeight = Math.round((cardHeight + gap) * 2 + cardHeight / 2);
      setMobileMaxHeight(maxHeight);
    };

    computeMobileMaxHeight();
    window.addEventListener("resize", computeMobileMaxHeight);
    return () => window.removeEventListener("resize", computeMobileMaxHeight);
  }, [mobileCollapsed]);

  const scrollCottages = (direction: "previous" | "next") => {
    if (!listRef.current) return;

    const card = listRef.current.querySelector("li");
    const cardWidth = card?.getBoundingClientRect().width ?? 260;
    const gap = 24;

    const nextPage =
      direction === "next"
        ? Math.min(currentPage + 1, totalPages - 1)
        : Math.max(currentPage - 1, 0);

    listRef.current.scrollTo({
      left: nextPage * (cardWidth + gap) * itemsPerPage,
      behavior: "smooth",
    });

    setCurrentPage(nextPage);
  };

  return (
    <SectionContainer id="stugor" aria-labelledby="cottages-title">
      <PageContainer>
        <CottagesHeader>
          <CottagesEyebrow>Grönhögens Stugby</CottagesEyebrow>

          <CottagesTitle id="cottages-title">Våra stugor</CottagesTitle>

          <CottagesIntro>
            Upptäck våra 11 stugor och hitta det boende som passar dig bäst.
            Alla bokningar sker enkelt och tryggt via Airbnb.
          </CottagesIntro>

          <CottagesIntro>
            <strong>Adress:</strong> {siteData.address.street},{" "}
            {siteData.address.postalCode} {siteData.address.city}
          </CottagesIntro>
        </CottagesHeader>

        <CottagesCarouselHeader>
          <CottagesDivider />

          <CottagesActions aria-label="Bläddra bland stugor">
            <CottagesCarouselButton
              type="button"
              onClick={() => scrollCottages("previous")}
              aria-label="Visa föregående stugor"
              disabled={currentPage === 0}
            >
              ←
            </CottagesCarouselButton>

            <CottagesCarouselButton
              type="button"
              onClick={() => scrollCottages("next")}
              aria-label="Visa fler stugor"
              disabled={currentPage === totalPages - 1}
            >
              →
            </CottagesCarouselButton>
          </CottagesActions>
        </CottagesCarouselHeader>

        <CottagesList
          ref={listRef}
          $collapsed={mobileCollapsed}
          style={
            mobileCollapsed && mobileMaxHeight
              ? { maxHeight: `${mobileMaxHeight}px` }
              : undefined
          }
        >
          {cottages.map((cottage) => (
            <li key={cottage.id}>
              <CottageCard cottage={cottage} />
            </li>
          ))}
        </CottagesList>

        <MobileShowMore onClick={() => setMobileCollapsed((c) => !c)}>
          {mobileCollapsed ? "Visa fler stugor" : "Visa färre stugor"}
        </MobileShowMore>

        {totalPages > 1 && (
          <CottagesPagination aria-label="Sidor i stugkarusellen">
            {Array.from({ length: totalPages }).map((_, index) => (
              <CottagesPaginationDot
                key={index}
                $active={index === currentPage}
                aria-hidden="true"
              />
            ))}
          </CottagesPagination>
        )}
      </PageContainer>
    </SectionContainer>
  );
};

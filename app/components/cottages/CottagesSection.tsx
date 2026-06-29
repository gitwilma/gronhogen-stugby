"use client";

import { CottageCard } from "@/app/components/cottages/CottageCard";
import { PageContainer } from "@/app/components/layout/PageContainer";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { cottages } from "@/app/data/cottages";
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
} from "./CottagesSection.styles";

const getItemsPerPage = () => {
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
          <CottagesEyebrow>Boende</CottagesEyebrow>

          <CottagesTitle id="cottages-title">Våra stugor</CottagesTitle>

          <CottagesIntro>
            Upptäck våra 11 stugor och hitta det boende som passar dig bäst.
            Alla bokningar sker enkelt och tryggt via Airbnb.
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

        <CottagesList ref={listRef}>
          {cottages.map((cottage) => (
            <li key={cottage.id}>
              <CottageCard cottage={cottage} />
            </li>
          ))}
        </CottagesList>

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

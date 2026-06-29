"use client";

import { PageContainer } from "@/app/components/layout/PageContainer";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { cottageCarouselSlides } from "@/app/data/cottageCarousel";
import { useEffect, useMemo, useState } from "react";
import {
  Carousel,
  CarouselButton,
  CarouselGrid,
  CarouselGridImage,
  CarouselGridItem,
  CarouselImage,
  CarouselImageFrame,
  CarouselOverlay,
  CarouselSlide,
  CarouselStatus,
  CarouselTrack,
  CarouselViewport,
} from "./CottageCarouselSection.styles";

const AUTOPLAY_INTERVAL_MS = 6000;

const getWrappedIndex = (index: number, length: number) =>
  (index + length) % length;

export const CottageCarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slidesCount = cottageCarouselSlides.length;

  const visibleSlides = useMemo(() => {
    const previousIndex = getWrappedIndex(activeIndex - 1, slidesCount);
    const nextIndex = getWrappedIndex(activeIndex + 1, slidesCount);

    return [
      {
        ...cottageCarouselSlides[previousIndex],
        position: "previous" as const,
      },
      { ...cottageCarouselSlides[activeIndex], position: "active" as const },
      { ...cottageCarouselSlides[nextIndex], position: "next" as const },
    ];
  }, [activeIndex, slidesCount]);

  const goToPreviousSlide = () => {
    setActiveIndex((currentIndex) =>
      getWrappedIndex(currentIndex - 1, slidesCount),
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((currentIndex) =>
      getWrappedIndex(currentIndex + 1, slidesCount),
    );
  };

  useEffect(() => {
    if (slidesCount <= 1 || isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        getWrappedIndex(currentIndex + 1, slidesCount),
      );
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [isPaused, slidesCount]);

  if (slidesCount === 0) return null;

  return (
    <SectionContainer aria-label="Bildspel från Grönhögens Stugby">
      <PageContainer>
        <Carousel
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <CarouselViewport>
            <CarouselTrack>
              {visibleSlides.map((slide) => {
                const isPrevious = slide.position === "previous";
                const isNext = slide.position === "next";
                const isActive = slide.position === "active";

                return (
                  <CarouselSlide key={slide.id} $position={slide.position}>
                    <CarouselButton
                      type="button"
                      disabled={isActive}
                      $position={slide.position}
                      aria-label={
                        isPrevious
                          ? "Visa föregående bild"
                          : isNext
                            ? "Visa nästa bild"
                            : "Aktuell bild"
                      }
                      onClick={
                        isPrevious
                          ? goToPreviousSlide
                          : isNext
                            ? goToNextSlide
                            : undefined
                      }
                    >
                      {!isActive && (
                        <CarouselOverlay
                          aria-hidden="true"
                          $position={slide.position}
                        >
                          {isPrevious ? "←" : "→"}
                        </CarouselOverlay>
                      )}

                      <CarouselImageFrame>
                        <CarouselImage
                          src={slide.src}
                          alt={isActive ? slide.alt : ""}
                          aria-hidden={!isActive}
                          fill
                          sizes={
                            isActive
                              ? "(max-width: 900px) 100vw, 62vw"
                              : "(max-width: 900px) 0vw, 26vw"
                          }
                        />
                      </CarouselImageFrame>
                    </CarouselButton>
                  </CarouselSlide>
                );
              })}
            </CarouselTrack>
          </CarouselViewport>

          <CarouselStatus role="status" aria-live="polite">
            Bild {activeIndex + 1} av {slidesCount}
          </CarouselStatus>
        </Carousel>
        <CarouselGrid>
          {cottageCarouselSlides.map((slide) => (
            <CarouselGridItem key={slide.id}>
              <CarouselGridImage
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width:560px) 100vw, 50vw"
              />
            </CarouselGridItem>
          ))}
        </CarouselGrid>
      </PageContainer>
    </SectionContainer>
  );
};

"use client";

import { PageContainer } from "@/app/components/layout/PageContainer";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { Button } from "@/app/components/ui/Button";
import { galleryImages } from "@/app/data/gallery";
import { useState } from "react";
import {
  GalleryActions,
  GalleryGrid,
  GalleryImage,
  GalleryImageItem,
  GalleryIntro,
  GalleryStatus,
  GalleryTitle,
} from "./GallerySection.styles";

const INITIAL_VISIBLE_COUNT = 6;
const LOAD_MORE_COUNT = 6;

export const GallerySection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const visibleImages = galleryImages.slice(0, visibleCount);
  const remainingImagesCount = galleryImages.length - visibleCount;
  const imagesToLoadCount = Math.min(LOAD_MORE_COUNT, remainingImagesCount);
  const hasMoreImages = remainingImagesCount > 0;

  const handleShowMore = () => {
    setVisibleCount((currentCount) =>
      Math.min(currentCount + LOAD_MORE_COUNT, galleryImages.length),
    );
  };

  return (
    <SectionContainer aria-labelledby="gallery-title">
      <PageContainer>
        <GalleryIntro>
          <p>Bilder från Björn Fåglar Fyr</p>
          <GalleryTitle id="gallery-title">Naturen runt knuten</GalleryTitle>
        </GalleryIntro>

        <GalleryGrid aria-label="Bildgalleri från naturen runt Grönhögen">
          {visibleImages.map((image) => (
            <GalleryImageItem key={image.id} $variant={image.variant}>
              <GalleryImage src={image.src} alt={image.alt} />
            </GalleryImageItem>
          ))}
        </GalleryGrid>

        <GalleryStatus role="status" aria-live="polite">
          Visar {visibleImages.length} av {galleryImages.length} bilder.
        </GalleryStatus>

        {hasMoreImages ? (
          <GalleryActions>
            <Button
              type="button"
              onClick={handleShowMore}
              aria-label={`Visa ${imagesToLoadCount} fler bilder i galleriet`}
            >
              Visa {imagesToLoadCount} fler bilder
            </Button>
          </GalleryActions>
        ) : null}
      </PageContainer>
    </SectionContainer>
  );
};

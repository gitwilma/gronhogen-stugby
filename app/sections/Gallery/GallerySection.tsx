import { PageContainer } from "@/app/components/layout/PageContainer";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { Button } from "@/app/components/ui/Button";
import { galleryImages } from "@/app/data/gallery";
import {
  GalleryGrid,
  GalleryImage,
  GalleryImageItem,
  GalleryIntro,
  GalleryTitle,
  GalleryActions,
} from "./GallerySection.styles";

export const GallerySection = () => {
  return (
    <SectionContainer aria-labelledby="gallery-title">
      <PageContainer>
        <GalleryIntro>
          <p>Bilder från Björn Fåglar Fyr</p>
          <GalleryTitle id="gallery-title">
            Naturen runt knuten
          </GalleryTitle>
        </GalleryIntro>

        <GalleryGrid aria-label="Bildgalleri från naturen runt Grönhögen">
          {galleryImages.map((image) => (
            <GalleryImageItem key={image.id} $variant={image.variant}>
              <GalleryImage src={image.src} alt={image.alt} />
            </GalleryImageItem>
          ))}
        </GalleryGrid>

        <GalleryActions>
          <Button href="#kontakt">Se fler bilder</Button>
        </GalleryActions>
      </PageContainer>
    </SectionContainer>
  );
};

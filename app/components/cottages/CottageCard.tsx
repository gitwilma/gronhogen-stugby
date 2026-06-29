import { Button } from "@/app/components/ui/Button";
import type { Cottage } from "@/app/data/cottages";
import {
  CottageCardArticle,
  CottageCardContent,
  CottageCardImage,
  CottageCardImageCaption,
  CottageCardImageOverlay,
  CottageCardImageWrapper,
  CottageCardMeta,
  CottageCardTitle,
} from "./CottageCard.styles";

type CottageCardProps = {
  cottage: Cottage;
};

export const CottageCard = ({ cottage }: CottageCardProps) => {
  return (
    <CottageCardArticle aria-labelledby={`${cottage.id}-title`}>
      <div>
        <CottageCardImageWrapper
          href={cottage.airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Se fler bilder och information om ${cottage.name} på Airbnb`}
        >
          <CottageCardImage src={cottage.imageSrc} alt={cottage.imageAlt} />
          <CottageCardImageOverlay aria-hidden="true">
            Fler bilder på Airbnb
          </CottageCardImageOverlay>
        </CottageCardImageWrapper>
        <CottageCardImageCaption>Fler bilder på Airbnb</CottageCardImageCaption>
      </div>

      <CottageCardContent>
        <div>
          <CottageCardTitle id={`${cottage.id}-title`}>
            {cottage.name}
          </CottageCardTitle>

          <CottageCardMeta>
            {cottage.guests} gäster · {cottage.bedrooms} sovrum · {cottage.beds}{" "}
            sängar · {cottage.bathrooms} badrum
          </CottageCardMeta>
        </div>

        <Button href={cottage.airbnbUrl} external variant="secondary">
          Visa på Airbnb
        </Button>
      </CottageCardContent>
    </CottageCardArticle>
  );
};

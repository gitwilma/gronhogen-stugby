import { Button } from "@/app/components/ui/Button";
import type { Cottage } from "@/app/data/cottages";
import {
  CottageCardArticle,
  CottageCardContent,
  CottageCardImage,
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
      <CottageCardImageWrapper>
        <CottageCardImage src={cottage.imageSrc} alt={cottage.imageAlt} />
      </CottageCardImageWrapper>

      <CottageCardContent>
        <div>
          <CottageCardTitle id={`${cottage.id}-title`}>
            {cottage.name}
          </CottageCardTitle>

          <CottageCardMeta>{cottage.beds} bäddar</CottageCardMeta>
        </div>

        <Button href={cottage.airbnbUrl} external>
          Visa på Airbnb
        </Button>
      </CottageCardContent>
    </CottageCardArticle>
  );
};

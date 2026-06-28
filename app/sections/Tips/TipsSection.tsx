import { PageContainer } from "@/app/components/layout/PageContainer";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { tips } from "@/app/data/tips";
import {
  TipCard,
  TipDescription,
  TipHeader,
  TipIcon,
  TipImage,
  TipImageWrapper,
  TipsEyebrow,
  TipsGrid,
  TipsTitle,
} from "./TipsSection.styles";

export const TipsSection = () => {
  return (
    <SectionContainer aria-labelledby="tips-title">
      <PageContainer>
        <TipsEyebrow>Carlas tips</TipsEyebrow>
        <TipsTitle id="tips-title">Upptäck södra Öland</TipsTitle>

        <TipsGrid>
          {tips.map((tip) => (
            <li key={tip.id}>
              <TipCard aria-labelledby={`${tip.id}-title`}>
                <TipImageWrapper>
                  <TipImage src={tip.imageSrc} alt={tip.imageAlt} />
                </TipImageWrapper>

                <TipHeader>
                  <TipIcon aria-hidden="true">{tip.icon}</TipIcon>
                  <h3 id={`${tip.id}-title`}>{tip.title}</h3>
                </TipHeader>

                <TipDescription>{tip.description}</TipDescription>
              </TipCard>
            </li>
          ))}
        </TipsGrid>
      </PageContainer>
    </SectionContainer>
  );
};

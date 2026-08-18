import { PageContainer } from "@/app/components/layout/PageContainer";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { tips } from "@/app/data/tips";
import {
  TipCard,
  TipDescription,
  TipHeader,
  TipIcon,
  TipsEyebrow,
  TipsGrid,
  TipsTitle,
} from "./TipsSection.styles";

export const TipsSection = () => {
  return (
    <SectionContainer aria-labelledby="tips-title">
      <PageContainer>
        <TipsEyebrow>Tips</TipsEyebrow>
        <TipsTitle id="tips-title">Upptäck Södra Öland</TipsTitle>

        <TipsGrid>
          {tips.map((tip) => {
            const IconComponent = tip.icon;
            return (
              <li key={tip.id}>
                <TipCard aria-labelledby={`${tip.id}-title`}>
                  {/* <TipImageWrapper>
                    <TipImage src={tip.imageSrc} alt={tip.imageAlt} />
                  </TipImageWrapper> */}

                  <TipHeader>
                    <TipIcon aria-hidden="true">
                      <IconComponent size={20} strokeWidth={2} />
                    </TipIcon>
                    <h3 id={`${tip.id}-title`}>{tip.title}</h3>
                  </TipHeader>

                  <TipDescription>{tip.description}</TipDescription>
                </TipCard>
              </li>
            );
          })}
        </TipsGrid>
      </PageContainer>
    </SectionContainer>
  );
};

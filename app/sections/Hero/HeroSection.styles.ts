import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";
import styled from "styled-components";

export const HeroSectionWrapper = styled.section`
  min-height: 560px;
  padding: ${spacing.huge} 0 ${spacing.xxl};
  background-color: ${colors.brand.accent};
  opacity: 0.4;

  @media (max-width: 900px) {
    min-height: 460px;
  }
`;

export const HeroLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.65fr) minmax(0, 1fr);
  align-items: center;
  gap: ${spacing.xxl};
  min-height: 420px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: ${spacing.xl};
  }
`;

export const HeroContent = styled.header`
  max-width: 520px;
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-heading);
  font-size: clamp(48px, 5vw, 72px);
  font-weight: 600;
  line-height: 1.15;
  color: ${colors.text.secondary};
`;

export const HeroEyebrow = styled.p`
  margin: ${spacing.md} 0 0;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #ef7b52;
`;

export const HeroIntro = styled.p`
  max-width: 390px;
  margin: ${spacing.md} 0 0;
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: ${colors.text.primary};
`;

export const HeroActions = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.sm};
  margin-top: ${spacing.xl};
`;

export const HeroVisual = styled.figure`
  margin: 0;
`;

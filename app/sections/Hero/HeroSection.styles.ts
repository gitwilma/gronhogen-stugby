import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";
import styled from "styled-components";

export const HeroSectionWrapper = styled.section`
  min-height: 80vh;
  padding: ${spacing.xl} 0;
  background-color: ${colors.background.base};
`;

export const HeroLayout = styled.div`
  display: grid;
  min-height: 70vh;
  align-items: center;
  gap: ${spacing.xl};

  @media (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

export const HeroContent = styled.header`
  max-width: 760px;
`;

export const HeroEyebrow = styled.p`
  margin: 0 0 ${spacing.md};
  font-family: var(--font-body);
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${colors.text.secondary};
`;

export const HeroTitle = styled.h1`
  max-width: 720px;
  font-family: var(--font-heading);
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 500;
  line-height: 1;
  color: ${colors.text.primary};
`;

export const HeroIntro = styled.p`
  max-width: 560px;
  margin: ${spacing.lg} 0 0;
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  color: ${colors.text.secondary};
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

export const HeroImagePlaceholder = styled.div`
  min-height: 420px;
  border-radius: ${radius.xl};
  background-color: ${colors.background.surface};
`;

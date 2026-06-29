import { colors } from "@/app/theme/colors";
import { spacing } from "@/app/theme/spacing";
import styled from "styled-components";

export const HeroSectionWrapper = styled.section`
  position: relative;
  min-height: calc(100vh - 96px);
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background-color: ${colors.background.base};
`;

export const HeroMedia = styled.figure`
  position: absolute;
  inset: 0;
  margin: 0;
  z-index: 0;

  img {
    object-fit: cover;
    object-position: center 55%;
  }
`;

export const HeroImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`;

export const HeroContent = styled.header`
  position: relative;
  z-index: 2;
  max-width: 720px;
  padding: ${spacing.huge} 0 ${spacing.xxl};
  color: ${colors.text.inverse};
`;

export const HeroEyebrow = styled.p`
  margin: 0 0 ${spacing.md};
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${colors.brand.editorial};
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(48px, 7vw, 96px);
  font-weight: 600;
  line-height: 0.95;
  color: ${colors.text.inverse};
`;

export const HeroIntro = styled.p`
  max-width: 520px;
  margin: ${spacing.lg} 0 0;
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.65;
  color: ${colors.text.inverseMuted};
`;

export const HeroActions = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.sm};
  margin-top: ${spacing.xl};
`;

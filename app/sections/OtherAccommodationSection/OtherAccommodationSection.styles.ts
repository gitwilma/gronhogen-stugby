import styled from "styled-components";
import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";

export const OtherAccommodationLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
  align-items: center;
  gap: ${spacing.xxl};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: ${spacing.xl};
  }
`;

export const OtherAccommodationContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 460px;
`;

export const OtherAccommodationEyebrow = styled.p`
  margin: 0 0 ${spacing.sm};
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #ef7b52;
`;

export const OtherAccommodationTitle = styled.h2`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 600;
  line-height: 1.1;
  color: ${colors.text.secondary};
`;

export const OtherAccommodationText = styled.p`
  margin: ${spacing.lg} 0 0;
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  color: ${colors.text.secondary};
`;

export const OtherAccommodationFeatures = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  margin: ${spacing.xl} 0;
  padding: 0;
  list-style: none;
`;

export const OtherAccommodationFeature = styled.li`
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 700;
  color: ${colors.text.secondary};
`;

export const OtherAccommodationImageWrapper = styled.figure`
  margin: 0;
`;

export const OtherAccommodationImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: ${radius.lg};
`;

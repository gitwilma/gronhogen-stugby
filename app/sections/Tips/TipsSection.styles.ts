import styled from "styled-components";
import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";

export const TipsEyebrow = styled.p`
  margin: 0 0 ${spacing.sm};
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${colors.brand.editorial};
`;

export const TipsTitle = styled.h2`
  margin: 0 0 ${spacing.xl};
  font-family: var(--font-heading);
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 600;
  line-height: 1.1;
  color: ${colors.text.secondary};
`;

export const TipsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: ${spacing.xl};
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const TipCard = styled.article`
  display: flex;
  flex-direction: column;
`;

export const TipImageWrapper = styled.figure`
  margin: 0 0 ${spacing.md};
`;

export const TipImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: ${radius.sm};
`;

export const TipHeader = styled.header`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};

  h3 {
    margin: 0;
    font-family: var(--font-body);
    font-size: 20px;
    font-weight: 700;
    color: ${colors.text.secondary};
  }
`;

export const TipIcon = styled.span`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: ${radius.full};
  background-color: ${colors.brand.secondary};
  color: ${colors.text.secondary};
`;

export const TipDescription = styled.p`
  margin: ${spacing.sm} 0 0;
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: ${colors.text.secondary};
`;

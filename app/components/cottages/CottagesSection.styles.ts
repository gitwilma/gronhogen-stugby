import styled from "styled-components";
import { colors } from "@/app/theme/colors";
import { spacing } from "@/app/theme/spacing";

export const CottagesHeader = styled.header`
  max-width: 680px;
  margin-bottom: ${spacing.xxl};
`;

export const CottagesTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 600;
  line-height: 1.1;
  color: ${colors.text.primary};
`;

export const CottagesIntro = styled.p`
  max-width: 560px;
  margin: ${spacing.md} 0 0;
  color: ${colors.text.secondary};
  font-size: 16px;
  line-height: 1.7;
`;

export const CottagesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: ${spacing.xl};
  row-gap: ${spacing.xxl};
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: ${spacing.xl};
  }
`;

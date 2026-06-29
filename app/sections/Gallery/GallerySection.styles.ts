import styled from "styled-components";
import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";
import type { GalleryImage as GalleryImageType } from "@/app/data/gallery";

type GalleryVariant = GalleryImageType["variant"];

export const GalleryIntro = styled.header`
  margin-bottom: ${spacing.xl};

  p {
    margin: 0 0 ${spacing.sm};
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${colors.brand.editorial};
  }
`;

export const GalleryTitle = styled.h2`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 600;
  line-height: 1.1;
  color: ${colors.text.secondary};
`;

export const GalleryGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 120px;
  gap: ${spacing.md};

  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
  }
`;

export const GalleryImageItem = styled.li<{ $variant: GalleryVariant }>`
  overflow: hidden;
  border-radius: ${radius.sm};

  ${({ $variant }) => {
    switch ($variant) {
      case "small":
        return `
          grid-column: span 2;
          grid-row: span 2;
        `;
      case "large":
        return `
          grid-column: span 4;
          grid-row: span 3;
        `;
      case "stackedTop":
      case "stackedBottom":
        return `
          grid-column: span 2;
          grid-row: span 1;
        `;
      case "tall":
        return `
          grid-column: span 2;
          grid-row: span 3;
        `;
      default:
        return "";
    }
  }}

  @media (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

export const GalleryImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 900px) {
    aspect-ratio: 4 / 3;
  }
`;

export const GalleryActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacing.lg};
`;

export const GalleryStatus = styled.p`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  border: 0;
  white-space: nowrap;
`;
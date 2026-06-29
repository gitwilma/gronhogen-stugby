import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";
import styled from "styled-components";

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
  color: ${colors.brand.editorial};
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

export const OtherAccommodationImageWrapper = styled.a`
  position: relative;
  display: block;
  margin: 0;
  overflow: hidden;
  border-radius: ${radius.lg};
  background-color: ${colors.background.subtle};
  text-decoration: none;

  &:hover img,
  &:focus-visible img {
    transform: scale(1.04);
  }

  &:hover span,
  &:focus-visible span {
    opacity: 1;
  }

  &:focus-visible {
    outline: 3px solid ${colors.focus.ring};
    outline-offset: 4px;
  }

  @media (max-width: 768px) {
    &:hover img,
    &:focus-visible img {
      transform: none;
    }

    &:hover span,
    &:focus-visible span {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover img,
    &:focus-visible img {
      transform: none;
    }
  }
`;

export const OtherAccommodationImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition: transform 450ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const OtherAccommodationImageOverlay = styled.span`
  position: absolute;
  inset: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${spacing.md};
  background-color: rgba(111, 123, 99, 0.42);

  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.text.inverse};

  opacity: 0;
  transition: opacity 220ms ease;

  @media (max-width: 768px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const OtherAccommodationImageCaption = styled.span`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-top: ${spacing.xs};
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: ${colors.text.secondary};
    opacity: 0.7;
  }
`;

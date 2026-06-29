import styled from "styled-components";
import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";

export const CottageCardArticle = styled.article`
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  background-color: ${colors.background.surface};
  border: 1px solid ${colors.border.default};
  border-radius: ${radius.md};
`;

export const CottageCardImageWrapper = styled.a`
  position: relative;
  display: block;
  margin: 0;
  overflow: hidden;
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
    outline-offset: -3px;
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover img,
    &:focus-visible img {
      transform: none;
    }
  }
`;

export const CottageCardImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform 450ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const CottageCardImageOverlay = styled.span`
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

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const CottageCardContent = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  gap: ${spacing.lg};
  padding: ${spacing.lg};
`;

export const CottageCardTitle = styled.h3`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(28px, 2.4vw, 34px);
  font-weight: 600;
  line-height: 1.05;
  color: ${colors.text.secondary};
`;

export const CottageCardMeta = styled.p`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.xs};

  margin: ${spacing.xs} 0 0;

  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 700;
  color: ${colors.text.secondary};
`;

export const CottageCardMetaIcon = styled.span`
  font-size: 10px;
  line-height: 1;
  color: ${colors.brand.primary};
`;

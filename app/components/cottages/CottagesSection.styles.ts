import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";
import styled from "styled-components";

export const CottagesHeader = styled.header`
  max-width: 680px;
  margin-bottom: ${spacing.xl};
`;

export const CottagesEyebrow = styled.p`
  margin: 0 0 ${spacing.md};
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${colors.brand.editorial};
`;

export const CottagesTitle = styled.h2`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 600;
  line-height: 1.1;
  color: ${colors.text.secondary};
`;

export const CottagesIntro = styled.p`
  max-width: 520px;
  margin: ${spacing.lg} 0 0;

  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.65;

  color: ${colors.text.secondary};
`;

export const CottagesCarouselHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing.lg};
  margin-bottom: ${spacing.lg};

  @media (max-width: 560px) {
    display: none;
  }

  @media (max-width: 640px) {
    align-items: flex-start;
  }
`;

export const CottagesDivider = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${colors.border.default};
`;

export const CottagesActions = styled.div`
  display: flex;
  gap: ${spacing.sm};
`;

export const CottagesCarouselButton = styled.button`
  width: 46px;
  height: 46px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${colors.border.default};
  border-radius: ${radius.full};
  background-color: ${colors.background.surface};
  color: ${colors.text.secondary};

  font-family: var(--font-heading);
  font-size: 28px;
  line-height: 1;

  cursor: pointer;

  transition:
    background-color 180ms ease,
    color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;

  &:hover {
    background-color: ${colors.background.elevated};
    color: ${colors.brand.primary};
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid ${colors.focus.ring};
    outline-offset: 4px;
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
    pointer-events: none;
    box-shadow: none;
    transform: none;
  }

  &:disabled:hover {
    background-color: ${colors.background.surface};
    color: ${colors.text.secondary};
    box-shadow: none;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

export const CottagesList = styled.ul<{ $collapsed?: boolean }>`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% - (${spacing.lg} * 4)) / 5);
  gap: ${spacing.lg};

  margin: 0;
  padding: 0 0 ${spacing.sm};
  list-style: none;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 0;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > li {
    scroll-snap-align: start;
  }

  @media (max-width: 1200px) {
    grid-auto-columns: calc((100% - (${spacing.lg} * 2)) / 3);
  }

  @media (max-width: 800px) {
    grid-auto-columns: calc((100% - ${spacing.lg}) / 2);
  }

  @media (max-width: 560px) {
    grid-auto-flow: row;
    grid-auto-columns: auto;
    grid-template-columns: 1fr;
    overflow-x: visible;

    /* If collapsed on mobile, show a subtle peek of remaining items and add stronger fade */
    ${(props) =>
      props.$collapsed
        ? `
      position: relative;
      overflow: hidden;

      > li:nth-child(n+3) {
        /* Keep the items in the flow but visually deemphasise them */
        opacity: 0.18;
        transform: translateY(6px);
        filter: grayscale(15%);
        pointer-events: none;
        transition: opacity 220ms ease, transform 220ms ease;
      }

      /* Stronger fade that matches the page background */
      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 6rem;
        background: linear-gradient(180deg, rgba(253,249,246,0) 0%, rgba(253,249,246,0.98) 100%);
        pointer-events: none;
      }
    `
        : ""}
  }
`;

export const CottagesPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin-top: ${spacing.xl};
`;

export const CottagesPaginationDot = styled.span<{
  $active: boolean;
}>`
  width: ${({ $active }) => ($active ? "28px" : "8px")};
  height: 8px;

  border-radius: 999px;

  background-color: ${({ $active }) =>
    $active ? colors.brand.primary : colors.border.default};

  transition: all 250ms ease;
`;

export const MobileShowMore = styled.button`
  display: none;
  margin: ${spacing.md} auto 0;
  background: none;
  border: 0;
  color: ${colors.brand.primary};
  font-family: var(--font-body);
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 560px) {
    display: block;
  }
`;

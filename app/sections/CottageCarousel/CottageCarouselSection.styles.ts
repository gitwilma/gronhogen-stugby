import Image from "next/image";
import styled, { css } from "styled-components";
import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";

type SlidePosition = "previous" | "active" | "next";

export const Carousel = styled.div`
  position: relative;
`;

export const CarouselViewport = styled.div`
  overflow: hidden;
  margin-inline: calc(${spacing.xxl} * -1);

  @media (max-width: 900px) {
    margin-inline: 0;
  }
`;

export const CarouselTrack = styled.ul`
  display: grid;
  grid-template-columns: 32% 64% 32%;
  align-items: center;
  gap: ${spacing.xl};

  margin: 0;
  padding: 0;
  list-style: none;

  transform: translateX(-18%);
  transition: transform 500ms ease;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const activeSlideStyles = css`
  opacity: 1;
  transform: scale(1);
`;

const sideSlideStyles = css`
  opacity: 0.62;
  transform: scale(0.88);
`;

export const CarouselSlide = styled.li<{ $position: SlidePosition }>`
  ${({ $position }) =>
    $position === "active" ? activeSlideStyles : sideSlideStyles};

  transition:
    opacity 400ms ease,
    transform 400ms ease;

  @media (max-width: 900px) {
    display: ${({ $position }) => ($position === "active" ? "block" : "none")};
    transform: none;
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const CarouselButton = styled.button<{ $position: SlidePosition }>`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;

  border: 0;
  border-radius: ${radius.xl};
  background: transparent;
  overflow: hidden;

  cursor: ${({ $position }) =>
    $position === "active" ? "default" : "pointer"};

  &:disabled {
    cursor: default;
  }

  &:focus-visible {
    outline: 3px solid ${colors.focus.ring};
    outline-offset: 6px;
  }
`;

export const CarouselImageFrame = styled.figure`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;

  margin: 0;
  overflow: hidden;
  border-radius: ${radius.xl};
  background-color: ${colors.background.subtle};

  @media (max-width: 900px) {
    aspect-ratio: 4 / 3;
  }
`;

export const CarouselImage = styled(Image)`
  object-fit: cover;
  transition: transform 500ms ease;

  ${CarouselButton}:not(:disabled):hover &,
  ${CarouselButton}:not(:disabled):focus-visible & {
    transform: scale(1.04);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const CarouselOverlay = styled.span`
  position: absolute;
  inset: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(111, 123, 99, 0.36);
  color: ${colors.text.inverse};

  font-family: var(--font-heading);
  font-size: clamp(56px, 7vw, 104px);
  line-height: 1;

  opacity: 0;
  transition:
    opacity 220ms ease,
    background-color 220ms ease;

  ${CarouselButton}:hover &,
  ${CarouselButton}:focus-visible & {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const CarouselStatus = styled.p`
  position: absolute;
  width: 1px;
  height: 1px;

  margin: -1px;
  padding: 0;

  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;

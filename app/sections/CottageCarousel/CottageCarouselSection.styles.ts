import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";
import Image from "next/image";
import styled, { css } from "styled-components";

type SlidePosition = "previous" | "active" | "next";

export const Carousel = styled.div`
  position: relative;

  @media (max-width: 900px) {
    display: none;
  }
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
  grid-template-columns: minmax(0, 24%) minmax(0, 52%) minmax(0, 24%);
  align-items: center;
  gap: ${spacing.xl};

  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const activeSlideStyles = css`
  opacity: 1;
  transform: scale(1);
`;

const sideSlideStyles = css`
  opacity: 0.58;
  transform: scale(0.94);
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

export const CarouselOverlay = styled.span<{ $position: SlidePosition }>`
  position: absolute;
  inset: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: ${({ $position }) =>
    $position === "previous" ? "flex-start" : "flex-end"};

  padding-inline: ${spacing.xl};

  background-color: rgba(111, 123, 99, 0.36);
  color: ${colors.text.inverse};

  font-family: var(--font-heading);
  font-size: clamp(48px, 5vw, 82px);
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

export const CarouselGrid = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing.md};
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const CarouselGridItem = styled.figure`
  position: relative;
  margin: 0;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: ${radius.lg};
`;

export const CarouselGridImage = styled(Image)`
  object-fit: cover;
`;
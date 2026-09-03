import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";
import styled from "styled-components";

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr) 320px;
  gap: ${spacing.xl};
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const LocationDetails = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(36px, 4vw, 48px);
  font-weight: 600;
  line-height: 1.1;
  color: ${colors.text.secondary};
`;

export const LocationIntro = styled.p`
  margin: ${spacing.sm} 0 ${spacing.lg};
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: ${colors.text.secondary};
`;

export const LocationAddress = styled.address`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xxs};
  margin-bottom: ${spacing.md};
  font-style: normal;
  font-family: var(--font-body);
  color: ${colors.text.secondary};

  strong {
    color: ${colors.text.primary};
  }
`;

export const NearbyTitle = styled.strong`
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 700;
  color: ${colors.text.primary};
  margin-bottom: ${spacing.xxs};
  display: block;
`;

export const NearbyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NearbyItem = styled.li`
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.55;
  color: ${colors.text.secondary};
  white-space: pre;
`;

export const GuideWrapper = styled.aside`
  display: flex;
  align-items: flex-start;
  gap: ${spacing.sm};

  margin-top: ${spacing.xl};
  padding-top: ${spacing.lg};
  border-top: 1px solid ${colors.border.default};

  color: ${colors.text.secondary};

  > svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: ${colors.brand.primary};
  }
`;

export const GuideTitle = styled.strong`
  display: block;
  margin-bottom: ${spacing.xxs};

  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 700;
  color: ${colors.text.primary};
`;

export const GuideText = styled.p`
  margin: 0 0 ${spacing.xs};

  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.55;
  color: ${colors.text.secondary};
`;

export const GuideLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;

  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;

  color: ${colors.brand.primary};
  text-decoration: none;

  span {
    transition: transform 180ms ease;
  }

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;

    span {
      transform: translateX(3px);
    }
  }

  &:focus-visible {
    outline: 3px solid ${colors.focus.ring};
    outline-offset: 4px;
    border-radius: ${radius.xs};
  }

  @media (prefers-reduced-motion: reduce) {
    span {
      transition: none;
    }

    &:hover span {
      transform: none;
    }
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  min-height: 360px;
  position: relative;
`;

export const MapPlaceholder = styled.div`
  width: 100%;
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${colors.brand.secondary} 0%,
    ${colors.state.disabled} 100%
  );
  border-radius: ${radius.lg};
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid ${colors.focus.ring};
    outline-offset: 4px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacing.md};
    color: ${colors.text.primary};
    text-align: center;
  }

  svg {
    width: 48px;
    height: 48px;
    opacity: 0.9;
  }

  p {
    margin: 0;
    font-family: var(--font-body);
    font-size: 16px;
    font-weight: 500;
    color: ${colors.text.primary};
  }

  @media (max-width: 768px) {
    min-height: 300px;

    svg {
      width: 40px;
      height: 40px;
    }

    p {
      font-size: 15px;
    }
  }
`;

export const MapFrame = styled.iframe`
  width: 100%;
  min-height: 360px;
  display: block;
  border: 0;
  border-radius: ${radius.lg};
`;

export const ContactPanel = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing.md};
  padding-left: ${spacing.xl};
  border-left: 1px solid ${colors.border.default};

  @media (max-width: 1100px) {
    padding-left: 0;
    border-left: 0;
  }
`;

export const ContactText = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 16px;
  color: ${colors.text.secondary};
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  font-family: var(--font-body);
  font-size: 15px;
  color: ${colors.text.secondary};

  span {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${radius.full};
    background-color: ${colors.brand.secondary};
    color: ${colors.text.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: ${colors.brand.primary};
  }

  a:focus-visible {
    outline: 3px solid ${colors.focus.ring};
    outline-offset: 4px;
    border-radius: ${radius.xs};
  }

  address {
    font-style: normal;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

export const ContactImage = styled.figure`
  position: relative;
  width: 100%;
  min-height: 260px;
  margin: ${spacing.md} 0 0;
  overflow: hidden;
  border-radius: ${radius.lg};

  img {
    object-fit: cover;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

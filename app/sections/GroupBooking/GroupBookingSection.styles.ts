import styled from "styled-components";
import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";

export const GroupBookingSectionWrapper = styled.section`
  padding: ${spacing.xxl} 0 0;
  background-color: ${colors.background.base};
`;

export const GroupBookingCard = styled.article`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${spacing.xl};

  padding: ${spacing.xl};
  border-radius: ${radius.lg};
  background-color: ${colors.background.elevated};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
  }
`;

export const GroupBookingIcon = styled.div`
  width: 120px;
  height: 120px;
  display: grid;
  place-items: center;
  color: ${colors.brand.primary};

  span {
    font-size: 72px;
    line-height: 1;
  }

  @media (max-width: 900px) {
    width: 88px;
    height: 88px;

    span {
      font-size: 56px;
    }
  }
`;

export const GroupBookingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

export const GroupBookingTitle = styled.h2`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 600;
  line-height: 1.1;
  color: ${colors.text.secondary};
`;

export const GroupBookingText = styled.p`
  max-width: 720px;
  margin: 0;
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: ${colors.text.secondary};
`;

export const ContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.lg};
  margin: ${spacing.sm} 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const ContactLink = styled.a`
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 700;
  color: ${colors.text.secondary};
  text-decoration: none;

  &:hover {
    color: ${colors.brand.primary};
  }

  &:focus-visible {
    outline: 3px solid ${colors.focus.ring};
    outline-offset: 4px;
    border-radius: ${radius.xs};
  }
`;

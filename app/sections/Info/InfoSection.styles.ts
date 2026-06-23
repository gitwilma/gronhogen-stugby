import styled from "styled-components";
import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";

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

export const NearbyList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NearbyItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: ${spacing.md};
  font-family: var(--font-body);
  font-size: 15px;
  color: ${colors.text.secondary};

  strong {
    color: ${colors.text.secondary};
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  min-height: 360px;
`;

export const MapFrame = styled.iframe`
  width: 100%;
  min-height: 360px;
  display: block;
  border: 0;
`;

export const ContactPanel = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing.md};
  padding-left: ${spacing.xl};
  border-left: 1px solid ${colors.border.strong};

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

export const ImagePlaceholder = styled.div`
  width: 100%;
  min-height: 260px;
  margin-top: ${spacing.md};
  border: 6px solid ${colors.border.default};
  border-radius: ${radius.xl};
  opacity: 0.45;

  @media (max-width: 1100px) {
    display: none;
  }
`;

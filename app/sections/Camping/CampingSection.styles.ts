import { colors } from "@/app/theme/colors";
import { spacing } from "@/app/theme/spacing";
import styled from "styled-components";

export const CampingCard = styled.article`
  display: flex;
  flex-direction: column; /* stack with icon on top */
  align-items: center;
  text-align: center;
  gap: ${spacing.md};
  background: ${colors.background.surface};
  padding: ${spacing.xl};
  border-radius: 12px;
  border: 1px solid ${colors.border.default};
  max-width: 600px;
  width: 100%;
  margin: ${spacing.lg} auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);

  @media (max-width: 900px) {
    padding: ${spacing.lg};
    gap: ${spacing.md};
  }

  @media (max-width: 700px) {
    padding: ${spacing.md};
    gap: ${spacing.sm};
  }
`;

export const CampingIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.brand.primary};
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  margin-top: 4px;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 700px) {
    width: 48px;
    height: 48px;
    margin-bottom: ${spacing.sm};
  }
`;

export const CampingContent = styled.div`
  min-width: 0;
`;

export const CampingHeading = styled.h3`
  margin: 0 0 ${spacing.xs} 0;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${colors.brand.editorial};
`;

export const CampingTitle = styled.p`
  margin: 0 0 ${spacing.xs} 0;
  font-family: var(--font-body);
  font-size: 18px;
  color: ${colors.text.secondary};
  font-weight: 600;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const CampingDescription = styled.p`
  margin: 0 0 ${spacing.sm} 0;
  font-family: var(--font-body);
  font-size: 15px;
  color: ${colors.text.secondary};

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export const CampingLink = styled.a`
  color: ${colors.brand.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

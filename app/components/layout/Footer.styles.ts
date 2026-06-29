import Link from "next/link";
import styled from "styled-components";
import { colors } from "@/app/theme/colors";
import { spacing } from "@/app/theme/spacing";
import { radius } from "@/app/theme/radius";

export const FooterWrapper = styled.footer`
  background-color: ${colors.background.elevated};
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(220px, 1fr) minmax(180px, auto);
  gap: ${spacing.xxl};
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: ${spacing.xl};
  }
`;

export const FooterBrand = styled.section`
  max-width: 520px;

  h2 {
    margin: 0;
    font-family: var(--font-heading);
    font-size: clamp(36px, 4vw, 52px);
    font-weight: 600;
    line-height: 1.1;
    color: ${colors.text.secondary};
  }
`;

export const FooterInfo = styled.address`
  font-style: normal;
`;

export const FooterText = styled.p`
  margin: ${spacing.md} 0 0;
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  color: ${colors.text.secondary};

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
`;

export const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const FooterLink = styled(Link)`
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 700;
  color: ${colors.text.secondary};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.02em;

  &:hover {
    color: ${colors.brand.primary};
  }

  &:focus-visible {
    outline: 3px solid ${colors.focus.ring};
    outline-offset: 4px;
    border-radius: ${radius.xs};
  }
`;

export const FooterDivider = styled.hr`
  margin: ${spacing.xxl} 0 ${spacing.lg};
  border: 0;
  border-top: 1px solid ${colors.border.default};
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing.md};

  font-family: var(--font-body);
  font-size: 14px;
  color: ${colors.text.secondary};

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

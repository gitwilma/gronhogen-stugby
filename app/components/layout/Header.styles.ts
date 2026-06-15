import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";
import styled from "styled-components";


export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: ${colors.background.base};
`;

export const Nav = styled.nav`
  width: 100%;
`;

export const NavInner = styled.div`
  width: min(1200px, calc(100% - 48px));
  min-height: 96px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing.lg};

  @media (max-width: 768px) {
    min-height: 80px;
    width: min(100%, calc(100% - 32px));
  }
`;

export const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: ${radius.full};

  &:focus-visible {
    outline: 3px solid ${colors.focus.ring};
    outline-offset: 4px;
  }
`;

export const LogoPlaceholder = styled.span`
  width: 112px;
  height: 112px;
  border-radius: ${radius.full};
  background-color: ${colors.brand.accent};
  transform: translateY(24px);

  @media (max-width: 768px) {
    width: 72px;
    height: 72px;
    transform: translateY(12px);
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.xl};

  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavListItem = styled.li`
  margin: 0;
`;

export const NavLink = styled.a`
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  color: ${colors.text.primary};
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

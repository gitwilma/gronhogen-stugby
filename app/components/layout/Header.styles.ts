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
  width: 100px;
  height: 100px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: ${radius.full};
  background-color: ${colors.brand.accent};

  @media (max-width: 768px) {
    width: 62px;
    height: 62px;
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

export const DesktopAirbnbButton = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;

    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    border: 1px solid ${colors.border.default};
    border-radius: ${radius.full};
    background-color: ${colors.background.surface};

    cursor: pointer;
  }

  &:focus-visible {
    outline: 3px solid ${colors.focus.ring};
    outline-offset: 4px;
  }
`;

export const MobileMenuLine = styled.span`
  width: 18px;
  height: 2px;
  border-radius: ${radius.full};
  background-color: ${colors.text.secondary};
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};

    width: min(100%, calc(100% - 32px));
    margin: 0 auto ${spacing.md};

    border: 1px solid ${colors.border.default};
    border-radius: ${radius.lg};
    background-color: ${colors.background.surface};

    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
  }
`;

export const MobileNavList = styled.ul`
  margin: 0;
  padding: ${spacing.md};
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`;

export const MobileNavLink = styled.a`
  display: block;
  padding: ${spacing.md};

  border-radius: ${radius.md};

  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 700;
  color: ${colors.text.secondary};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  &:hover {
    background-color: ${colors.background.elevated};
    color: ${colors.brand.primary};
  }

  &:focus-visible {
    outline: 3px solid ${colors.focus.ring};
    outline-offset: 2px;
  }
`;

export const MobileAirbnbButton = styled.a`
  display: block;
  margin-top: ${spacing.xs};
  padding: ${spacing.md};

  border-radius: ${radius.md};
  background-color: ${colors.brand.primary};

  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 700;
  color: ${colors.text.inverse};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  &:hover {
    background-color: ${colors.brand.primaryHover};
  }

  &:focus-visible {
    outline: 3px solid ${colors.focus.ring};
    outline-offset: 2px;
  }
`;

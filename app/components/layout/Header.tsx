"use client";

import { Button } from "@/app/components/ui/Button";
import { siteData } from "@/app/data/site";
import { useState } from "react";
import {
  DesktopAirbnbButton,
  HeaderWrapper,
  LogoLink,
  LogoPlaceholder,
  MobileAirbnbButton,
  MobileMenu,
  MobileMenuButton,
  MobileMenuLine,
  MobileNavLink,
  MobileNavList,
  Nav,
  NavInner,
  NavLink,
  NavList,
  NavListItem,
} from "./Header.styles";

const navItems = [
  { label: "Hem", href: "#hem" },
  { label: "Våra stugor", href: "#stugor" },
  { label: "Hitta hit", href: "#hitta-hit" },
  { label: "Kontakt", href: "#kontakt" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <Nav aria-label="Huvudnavigation">
        <NavInner>
          <LogoLink href="#hem" aria-label="Gå till startsidan">
            <LogoPlaceholder aria-hidden="true" />
          </LogoLink>

          <NavList>
            {navItems.map((item) => (
              <NavListItem key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </NavListItem>
            ))}
          </NavList>

          <DesktopAirbnbButton>
            <Button href={siteData.airbnbProfileUrl} external>
              Till Airbnb
            </Button>
          </DesktopAirbnbButton>

          <MobileMenuButton
            type="button"
            aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <MobileMenuLine />
            <MobileMenuLine />
            <MobileMenuLine />
          </MobileMenuButton>
        </NavInner>

        <MobileMenu id="mobile-menu" $isOpen={isMenuOpen}>
          <MobileNavList>
            {navItems.map((item) => (
              <li key={item.href}>
                <MobileNavLink href={item.href} onClick={closeMenu}>
                  {item.label}
                </MobileNavLink>
              </li>
            ))}

            <li>
              <MobileAirbnbButton
                href={siteData.airbnbProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Till Airbnb
              </MobileAirbnbButton>
            </li>
          </MobileNavList>
        </MobileMenu>
      </Nav>
    </HeaderWrapper>
  );
};

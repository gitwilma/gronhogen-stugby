import { Button } from "@/app/components/ui/Button";
import {
  HeaderWrapper,
  LogoLink,
  LogoPlaceholder,
  Nav,
  NavInner,
  NavLink,
  NavList,
  NavListItem,
} from "./Header.styles";

const navItems = [
  {
    label: "Hem",
    href: "#hem",
  },
  {
    label: "Våra stugor",
    href: "#stugor",
  },
  {
    label: "Hitta hit",
    href: "#hitta-hit",
  },
  {
    label: "Kontakt",
    href: "#kontakt",
  },
];

export const Header = () => {
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

          <Button href="https://www.airbnb.se/" external>
            Boka på Airbnb
          </Button>
        </NavInner>
      </Nav>
    </HeaderWrapper>
  );
};

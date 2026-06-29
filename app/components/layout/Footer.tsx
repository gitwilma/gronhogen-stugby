import { PageContainer } from "@/app/components/layout/PageContainer";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { siteData } from "@/app/data/site";
import {
  FooterBottom,
  FooterBrand,
  FooterContent,
  FooterDivider,
  FooterInfo,
  FooterLink,
  FooterLinks,
  FooterText,
  FooterWrapper,
} from "./Footer.styles";

const footerLinks = [
  { label: "Hem", href: "#hem" },
  { label: "Våra stugor", href: "#stugor" },
  { label: "Hitta hit", href: "#hitta-hit" },
  { label: "Kontakt", href: "#kontakt" },
];

export const Footer = () => {
  return (
    <FooterWrapper>
      <SectionContainer aria-labelledby="footer-title">
        <PageContainer>
          <FooterContent>
            <FooterBrand>
              <h2 id="footer-title">Grönhögens Stugby</h2>

              <FooterText>
                En naturnära stugby på södra Öland med närhet till hav,
                naturupplevelser och några av öns mest uppskattade utflyktsmål.
              </FooterText>
            </FooterBrand>

            <FooterInfo>
              <FooterText>
                {siteData.address.street}
                <br />
                {siteData.address.postalCode} {siteData.address.city}
              </FooterText>

              <FooterText>
                <a href={`tel:${siteData.phone.replaceAll(" ", "")}`}>
                  {siteData.phone}
                </a>
                <br />
                <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
              </FooterText>
            </FooterInfo>

            <nav aria-label="Sidfot navigation">
              <FooterLinks>
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </FooterLinks>
            </nav>
          </FooterContent>

          <FooterDivider />

          <FooterBottom>
            <span>© {new Date().getFullYear()} Grönhögens Stugby</span>
            <span>Webbplats av Wilma Håkansson</span>
          </FooterBottom>
        </PageContainer>
      </SectionContainer>
    </FooterWrapper>
  );
};

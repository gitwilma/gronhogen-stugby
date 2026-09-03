import { PageContainer } from "@/app/components/layout/PageContainer";
import { SectionContainer } from "@/app/components/layout/SectionContainer";
import { siteData } from "@/app/data/site";
import Image from "next/image";
import {
  FooterBottom,
  FooterBrand,
  FooterBrandHeader,
  FooterContent,
  FooterDivider,
  FooterInfo,
  FooterLink,
  FooterLinks,
  FooterLogo,
  FooterText,
  FooterWrapper,
} from "./Footer.styles";

const footerLinks = [
  { label: "Hem", href: "#hem" },
  { label: "Våra boenden", href: "#stugor" },
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
              <FooterBrandHeader>
                <FooterLogo
                  href="#hem"
                >
                  <Image
                    src="/assets/gronhogen-logo-primary1.svg"
                    alt="Grönhögens Uthyrning - Gå till startsidan"
                    width={200}
                    height={200}
                  />
                </FooterLogo>

                <h2 id="footer-title">
                  Grönhögens
                  <br />
                  Uthyrning
                </h2>
              </FooterBrandHeader>

              <FooterText>
                Naturnära boenden på södra Öland med närhet till hav,
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
            <span>© {new Date().getFullYear()} Grönhögens Uthyrning</span>
            <span>Webbplats av Wilma Håkansson</span>
          </FooterBottom>
        </PageContainer>
      </SectionContainer>
    </FooterWrapper>
  );
};

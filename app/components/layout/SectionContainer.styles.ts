import { spacing } from "@/app/theme/spacing";
import styled from "styled-components";

export const StyledSection = styled.section`
  padding: ${spacing.section.md} 0;
  scroll-margin-top: 96px;

  @media (max-width: 1024px) {
    padding: ${spacing.xxxl} 0;
  }

  @media (max-width: 768px) {
    padding: ${spacing.xxl} 0;
  }
`;

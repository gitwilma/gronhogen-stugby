import styled from "styled-components";
import { colors } from "@/app/theme/colors";
import { spacing } from "@/app/theme/spacing";

export const CottageCardArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

export const CottageCardImageWrapper = styled.figure`
  margin: 0;
  overflow: hidden;
  background-color: ${colors.background.subtle};
`;

export const CottageCardImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
`;

export const CottageCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing.md};
`;

export const CottageCardTitle = styled.h3`
  margin: 0;
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 600;
  line-height: 1.1;
  color: ${colors.text.primary};
`;

export const CottageCardMeta = styled.p`
  margin: ${spacing.xs} 0 0;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 700;
  color: ${colors.text.secondary};
`;

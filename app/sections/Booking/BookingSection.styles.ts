import styled from "styled-components";
import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";

export const BookingCard = styled.article`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: ${spacing.xl};

  padding: ${spacing.xl};

  background-color: ${colors.background.elevated};
  border-radius: ${radius.lg};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const BookingIcon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const BookingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`;

export const BookingTitle = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 20px;
  font-weight: 700;
`;

export const BookingDescription = styled.p`
  margin: 0;
  color: ${colors.text.secondary};
`;

export const BookingText = styled.div``;

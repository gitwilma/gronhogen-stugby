import { colors } from "@/app/theme/colors";
import { radius } from "@/app/theme/radius";
import { spacing } from "@/app/theme/spacing";
import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary";

type StyledButtonProps = {
  variant: ButtonVariant;
};

const baseButtonStyles = css`
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.xs};

  padding: ${spacing.sm} ${spacing.lg};
  border-radius: ${radius.full};

  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-decoration: none;

  cursor: pointer;
  transition:
    background-color 160ms ease,
    color 160ms ease,
    border-color 160ms ease;

  &:focus-visible {
    outline: 3px solid ${colors.focus.ring};
    outline-offset: 4px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const variantStyles = {
  primary: css`
    border: 1px solid ${colors.brand.primary};
    background-color: ${colors.brand.primary};
    color: ${colors.text.inverse};

    &:hover:not(:disabled) {
      border-color: ${colors.brand.primaryHover};
      background-color: ${colors.brand.primaryHover};
    }
  `,

  secondary: css`
    border: 1px solid ${colors.brand.secondary};
    background-color: ${colors.brand.secondary};
    color: ${colors.text.primary};

    &:hover:not(:disabled) {
      border-color: ${colors.brand.secondaryHover};
      background-color: ${colors.brand.secondaryHover};
    }
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${baseButtonStyles};
  ${({ variant }) => variantStyles[variant]};
`;

export const StyledLinkButton = styled.a<StyledButtonProps>`
  ${baseButtonStyles};
  ${({ variant }) => variantStyles[variant]};
`;

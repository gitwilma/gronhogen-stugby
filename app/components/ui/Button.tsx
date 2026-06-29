import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { StyledButton, StyledLinkButton } from "./Button.styles";

type ButtonVariant = "primary" | "secondary";

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
};

type ButtonAsLinkProps = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    external?: boolean;
  };

type ButtonAsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    external?: never;
  };

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const isLinkButton = (props: ButtonProps): props is ButtonAsLinkProps => {
  return typeof props.href === "string";
};

export const Button = (props: ButtonProps) => {
  const { children, variant = "primary" } = props;

  if (isLinkButton(props)) {
    const { href, external, target, rel, variant, children, ...linkProps } =
      props;

    if (external) {
      return (
        <StyledLinkButton
          href={href}
          variant={variant ?? "primary"}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {children}
        </StyledLinkButton>
      );
    }

    return (
      <StyledLinkButton
        as={Link}
        href={href}
        variant={variant ?? "primary"}
        target={target}
        rel={rel}
        {...linkProps}
      >
        {children}
      </StyledLinkButton>
    );
  }

  const { type = "button", ...buttonProps } = props;

  return (
    <StyledButton type={type} variant={variant} {...buttonProps}>
      {children}
    </StyledButton>
  );
};

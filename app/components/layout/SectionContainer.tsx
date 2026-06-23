import { StyledSection } from "./SectionContainer.styles";

type SectionContainerProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export const SectionContainer = ({
  children,
  id,
  className,
}: SectionContainerProps) => {
  return (
    <StyledSection id={id} className={className}>
      {children}
    </StyledSection>
  );
};

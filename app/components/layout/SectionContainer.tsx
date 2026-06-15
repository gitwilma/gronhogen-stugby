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
    <section id={id} className={`py-20 scroll-mt-24 ${className ?? ""}`}>
      {children}
    </section>
  );
};
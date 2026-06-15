type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className={`mx-auto w-[min(1200px,calc(100%-32px))] ${className ?? ""}`}>
      {children}
    </div>
  );
};
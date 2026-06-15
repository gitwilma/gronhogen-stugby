import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
};

export const Button = ({
  children,
  href,
  external = false,
  className,
}: ButtonProps) => {
  const baseClasses =
    "inline-flex min-h-11 items-center justify-center rounded-full border border-black px-5 py-2 text-sm font-medium transition hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black";

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${className ?? ""}`}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={`${baseClasses} ${className ?? ""}`}>
      {children}
    </button>
  );
};
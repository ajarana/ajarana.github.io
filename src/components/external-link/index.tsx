import { ReactNode } from "react";

interface LinkyProps {
  className?: string;
  children: ReactNode;
  href: string;
}

export default function ExternalLink({
  children,
  href,
  className,
}: LinkyProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

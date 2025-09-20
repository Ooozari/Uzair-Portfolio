import { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  children: ReactNode;
}

export default function SocialIcon({ href, children }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full hover:bg-light-bg/20 dark:hover:bg-dark-bg/20 transition-colors"
    >
      {children}
    </a>
  );
}

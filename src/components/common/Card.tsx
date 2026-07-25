import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/70
        backdrop-blur-md
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:border-red-500/30
        hover:shadow-red-500/10
        ${className}
      `}
    >
      {children}
    </div>
  );
}
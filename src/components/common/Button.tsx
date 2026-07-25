import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`rounded-xl bg-red-500 px-5 py-3 font-medium transition hover:bg-red-600 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
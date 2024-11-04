import { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 w-auto px-2.5",
        {
          "framer-button-primary": variant === "primary",
          "bg-[var(--framer-color-bg-tertiary)] hover:bg-[var(--framer-color-bg-secondary)] active:bg-[#ddd] disabled:bg-[var(--framer-color-bg-tertiary)]":
            variant === "secondary",
          "bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-700 disabled:bg-red-500 text-[var(--framer-color-text-reversed)]":
            variant === "danger",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

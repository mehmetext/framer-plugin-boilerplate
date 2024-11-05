import { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success";
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
        "flex items-center justify-center gap-2 h-7.5 w-auto px-2.5 transition",
        {
          "framer-button-primary": variant === "primary",
          "bg-[var(--framer-color-bg-tertiary)] hover:bg-[var(--framer-color-bg-secondary)] active:bg-[#ddd] disabled:bg-[var(--framer-color-bg-tertiary)]":
            variant === "secondary",
          "bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-700 disabled:bg-red-500 text-[var(--framer-color-text-reversed)]":
            variant === "danger",
          "bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-700 disabled:bg-green-500 text-[var(--framer-color-text-reversed)]":
            variant === "success",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

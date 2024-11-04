import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "primary" ? "framer-button-primary" : undefined;

  return (
    <button className={variantClass} {...props}>
      {children}
    </button>
  );
}

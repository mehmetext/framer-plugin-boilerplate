import { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className,
  type = "text",
  ...props
}: InputProps) {
  return (
    <input
      className={cn("px-2.5 w-auto disabled:opacity-70", className)}
      type={type}
      {...props}
    />
  );
}

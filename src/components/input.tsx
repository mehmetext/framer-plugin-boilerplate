import { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return <input className={cn("px-2.5 w-auto", className)} {...props} />;
}

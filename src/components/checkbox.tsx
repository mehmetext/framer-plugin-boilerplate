import { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Checkbox({ className, ...props }: CheckboxProps) {
  return <input type="checkbox" className={cn(className)} {...props} />;
}

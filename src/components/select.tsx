import { SelectHTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export default function Select({ className, ...props }: SelectProps) {
  return <select className={cn("px-2.5 w-auto", className)} {...props} />;
}

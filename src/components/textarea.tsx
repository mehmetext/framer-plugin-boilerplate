import { TextareaHTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({ className, ...props }: TextareaProps) {
  return <textarea className={cn("p-2.5 w-auto", className)} {...props} />;
}

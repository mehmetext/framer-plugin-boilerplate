import { cn } from "../lib/utils";

export default function Spinner({
  size = "normal",
  className,
}: {
  size?: "normal" | "large";
  className?: string;
}) {
  return (
    <div
      className={cn(
        {
          "framer-spinner": size === "normal",
          "framer-spinner-large": size === "large",
        },
        className
      )}
    />
  );
}

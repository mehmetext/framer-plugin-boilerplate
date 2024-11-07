import { SelectHTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface SelectProps<T = string>
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "onChange" | "children"
  > {
  onChange?: (value: T) => void;
  items: { label: string; value: T }[];
}

export default function Select<T>({
  className,
  onChange,
  items,
  ...props
}: SelectProps<T>) {
  return (
    <select
      className={cn("px-2.5 w-auto", className)}
      {...props}
      onChange={(e) =>
        onChange?.(
          items.find((item) => item.label === e.target.value)?.value as T
        )
      }
    >
      {items.map((item, i) => (
        <option key={i} value={item.label}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

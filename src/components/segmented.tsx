import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";

interface SegmentedProps {
  items?: {
    value: string;
    label: string;
  }[];
  value?: string;
  onChange?: (value: string) => void;
}

export default function Segmented({
  items = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ],
  value,
  onChange,
}: SegmentedProps) {
  const [selected, setSelected] = useState(value ?? items[0]?.value);

  return (
    <div className="bg-[var(--framer-color-bg-tertiary)] rounded-lg p-1 flex">
      <AnimatePresence>
        {items.map((item, i) => (
          <SegmentedItem
            key={i}
            selected={selected === item.value}
            onClick={() => {
              setSelected(item.value);
              onChange?.(item.value);
            }}
          >
            {item.label}
          </SegmentedItem>
        ))}
      </AnimatePresence>
    </div>
  );
}

function SegmentedItem({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={cn(
        "flex-1 flex items-center justify-center rounded-md bg-transparent transition relative p-2 text-[var(--framer-color-text-tertiary)] cursor-pointer select-none font-semibold",
        {
          "text-[var(--framer-color-tint)] dark:text-[var(--framer-color-text-tint)]":
            selected,
        }
      )}
      onClick={onClick}
    >
      {selected && (
        <motion.div
          className="bg-[var(--framer-color-bg)] dark:bg-[var(--framer-color-text-tertiary)] absolute inset-0 rounded-md shadow-md"
          layoutId="segmented"
        />
      )}
      <span className="z-10">{children}</span>
    </div>
  );
}

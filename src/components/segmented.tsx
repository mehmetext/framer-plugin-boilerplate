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
    <div className="bg-[var(--framer-color-bg-tertiary)] rounded-lg p-0.5 flex">
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
        "flex-1 flex items-center justify-center rounded-md bg-transparent transition relative p-1.5 text-[var(--framer-color-tint)] cursor-pointer select-none",
        {
          " text-[var(--framer-color-text-tertiary)]": !selected,
        }
      )}
      onClick={onClick}
    >
      {selected && (
        <motion.div
          className="bg-[var(--framer-color-bg)] absolute inset-0 rounded-md shadow-sm"
          layoutId="segmented"
        />
      )}
      <div className="z-10 relative font-medium">{children}</div>
    </div>
  );
}

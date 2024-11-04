import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";

interface SegmentedProps {
  items?: {
    value: string;
    label: string;
  }[];
}

export default function Segmented({ items }: SegmentedProps) {
  if (!items) {
    items = [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ];
  }

  const [selected, setSelected] = useState(items[0]?.value);

  return (
    <div className="bg-[var(--framer-color-bg-tertiary)] rounded-lg p-1 flex">
      <AnimatePresence>
        {items.map((item) => (
          <SegmentedItem
            selected={selected === item.value}
            onClick={() => setSelected(item.value)}
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
        "flex-1 flex items-center justify-center rounded-lg bg-transparent transition relative p-1 text-[var(--framer-color-tint)] cursor-pointer select-none",
        {
          " text-[var(--framer-color-text-tertiary)]": !selected,
        }
      )}
      onClick={onClick}
    >
      {selected && (
        <motion.div
          className="bg-white absolute inset-0 rounded-lg shadow-sm"
          layoutId="segmented"
        />
      )}
      <div className="z-10 relative font-medium">{children}</div>
    </div>
  );
}

import { useId, useState } from "react";
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
  const layoutId = useId();

  return (
    <div className="h-7.5 bg-[var(--framer-color-bg-tertiary)] rounded-lg p-1 flex">
      <AnimatePresence>
        {items.map((item, i) => (
          <>
            <SegmentedItem
              key={i}
              selected={selected === item.value}
              onClick={() => {
                setSelected(item.value);
                onChange?.(item.value);
              }}
              layoutId={layoutId}
            >
              {item.label}
            </SegmentedItem>
            {i < items.length - 1 && (
              <div
                className={cn(
                  "self-center w-px h-3 bg-[var(--framer-color-text-tertiary)] transition",
                  {
                    "opacity-0":
                      items.findIndex((item) => item.value === selected) ===
                        i ||
                      items.findIndex((item) => item.value === selected) ===
                        i + 1,
                  }
                )}
              />
            )}
          </>
        ))}
      </AnimatePresence>
    </div>
  );
}

function SegmentedItem({
  children,
  selected,
  onClick,
  layoutId,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
  layoutId: string;
}) {
  return (
    <div
      className={cn(
        "flex-1 flex items-center justify-center rounded-md bg-transparent transition relative text-[var(--framer-color-text-tertiary)] cursor-pointer select-none font-semibold",
        {
          "text-[var(--framer-color-tint)] dark:text-[var(--framer-color-text-tint)]":
            selected,
        }
      )}
      onClick={onClick}
    >
      {selected && (
        <motion.div
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className="bg-[var(--framer-color-bg)] dark:bg-[var(--framer-color-text-tertiary)] absolute inset-0 rounded-md shadow-md"
          layoutId={layoutId}
        />
      )}
      <span className="z-10">{children}</span>
    </div>
  );
}

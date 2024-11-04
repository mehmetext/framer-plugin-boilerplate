import { Minus, Plus } from "lucide-react";
import Button from "./button";
import Input from "./input";

interface StepperProps {
  value: number;
  onChange: (value: number) => void;
}

export default function Stepper({ value, onChange }: StepperProps) {
  return (
    <div className="flex items-center gap-2">
      <Input
        type="number"
        className="flex-1 w-full"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="flex-1 flex items-center bg-[var(--framer-color-bg-tertiary)] rounded-lg">
        <Button
          onClick={() => onChange(value - 1)}
          variant="secondary"
          className="flex-1 rounded-r-none"
        >
          <Minus className="w-4 h-4 text-[var(--framer-color-text-secondary)]" />
        </Button>
        <div className="w-px h-5 bg-[var(--framer-color-divider)]" />
        <Button
          onClick={() => onChange(value + 1)}
          variant="secondary"
          className="flex-1 rounded-l-none"
        >
          <Plus className="w-4 h-4 text-[var(--framer-color-text-secondary)]" />
        </Button>
      </div>
    </div>
  );
}

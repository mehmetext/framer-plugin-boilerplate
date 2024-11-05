import Button from "./button";
import { ChevronLeft } from "lucide-react";
import { useNavigation } from "../navigation/useNavigation";

export interface AppBarProps {
  title: string;
  actions?: React.ReactNode;
}

export default function AppBar({ title, actions }: AppBarProps) {
  const navigation = useNavigation();

  return (
    <header className="sticky top-0 z-20 px-2 h-[2.875rem] flex items-center gap-2 bg-[var(--framer-color-bg)]">
      {navigation.canGoBack() && (
        <Button onClick={navigation.goBack} size="icon" variant="secondary">
          <ChevronLeft className="w-4 h-4" />
        </Button>
      )}
      <h4 className="flex-1 text-sm font-semibold text-[var(--framer-color-text-primary)]">
        {title}
      </h4>
      {actions}
    </header>
  );
}

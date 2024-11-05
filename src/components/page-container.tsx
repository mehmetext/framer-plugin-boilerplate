import React from "react";
import Button from "./button";
import { ChevronLeft } from "lucide-react";
import { useNavigation } from "../navigation";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  appBar?: {
    title: string;
  };
}

export default function PageContainer({
  children,
  appBar,
  ...props
}: PageContainerProps) {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col gap-2" {...props}>
      {appBar && (
        <header className="sticky top-0 z-20 px-2 h-[2.875rem] flex items-center gap-2 bg-[var(--framer-color-bg)] shadow-md">
          {navigation.canGoBack() && (
            <Button
              onClick={navigation.goBack}
              className="h-7.5 w-7.5 p-0"
              variant="secondary"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          )}
          <h4 className="text-sm font-semibold text-[var(--framer-color-text-primary)]">
            {appBar.title}
          </h4>
        </header>
      )}
      <main className="p-2 flex flex-col gap-2">{children}</main>
    </div>
  );
}

import React from "react";
import AppBar, { AppBarProps } from "./app-bar";
import { cn } from "../lib/utils";

interface PageContainerProps {
  appBar?: AppBarProps;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function PageContainer({
  children,
  appBar,
  className,
  containerClassName,
}: PageContainerProps) {
  return (
    <div className={cn("flex-1 flex flex-col", className)}>
      {appBar && <AppBar {...appBar} />}
      <main
        className={cn(
          "flex-1 flex flex-col gap-2 px-2 pb-2",
          containerClassName
        )}
      >
        {children}
      </main>
    </div>
  );
}

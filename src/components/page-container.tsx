import React from "react";
import AppBar, { AppBarProps } from "./app-bar";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  appBar?: AppBarProps;
}

export default function PageContainer({
  children,
  appBar,
  ...props
}: PageContainerProps) {
  return (
    <div className="flex flex-col" {...props}>
      {appBar && <AppBar {...appBar} />}
      <main className="flex-1 flex flex-col gap-2 px-2 pb-2">{children}</main>
    </div>
  );
}

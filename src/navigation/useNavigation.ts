import { useContext, createContext } from "react";
import { NavigationContextType } from "./types";
import { RouteName, RouteParamList } from "./routes";

export const NavigationContext = createContext<
  NavigationContextType | undefined
>(undefined);

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return {
    ...context,
    navigate: <TRouteName extends RouteName>(
      name: TRouteName,
      params?: RouteParamList[TRouteName]
    ) => context.navigate(name, params),
  };
}

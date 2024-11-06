import { ReactNode, useState, useCallback, useEffect } from "react";
import { NavigationState, Route } from "./types";
import { RouteParamList, RouteName } from "./routes";
import { NavigationContext } from "./useNavigation";

interface NavigationProviderProps {
  children: ReactNode;
  initialRoute: RouteName;
}

export function NavigationProvider({
  children,
  initialRoute,
}: NavigationProviderProps) {
  const [state, setState] = useState<NavigationState>({
    routes: [{ name: initialRoute }],
    index: 0,
  });

  useEffect(() => {
    const rootEl = document.querySelector("#root");
    if (rootEl) {
      rootEl.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [state.index]);

  const navigate = useCallback(
    <TRouteName extends RouteName>(
      name: TRouteName,
      params?: RouteParamList[TRouteName]
    ) => {
      setState((prev) => ({
        routes: [
          ...prev.routes.slice(0, prev.index + 1),
          { name, params } as Route<RouteParamList[TRouteName]>,
        ],
        index: prev.index + 1,
      }));
    },
    []
  );

  const goBack = useCallback(() => {
    setState((prev) => ({
      ...prev,
      index: Math.max(0, prev.index - 1),
    }));
  }, []);

  const canGoBack = useCallback(() => {
    return state.index > 0;
  }, [state.index]);

  const currentRoute = state.routes[state.index];

  const replace = useCallback(
    <TRouteName extends RouteName>(
      name: TRouteName,
      params?: RouteParamList[TRouteName]
    ) => {
      setState((prev) => ({
        routes: [
          ...prev.routes.slice(0, prev.index),
          { name, params } as Route<RouteParamList[TRouteName]>,
        ],
        index: prev.index,
      }));
    },
    []
  );

  return (
    <NavigationContext.Provider
      value={{
        state,
        navigate,
        replace,
        goBack,
        canGoBack,
        currentRoute,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

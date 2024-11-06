import { RouteParamList, RouteName } from "./routes";

export type Route<T = RouteParamList[RouteName]> = {
  name: RouteName;
  params?: T;
};

export interface NavigationState {
  routes: Route[];
  index: number;
}

export interface NavigationContextType {
  state: NavigationState;
  navigate: <TRouteName extends RouteName>(
    name: TRouteName,
    params?: RouteParamList[TRouteName]
  ) => void;
  replace: <TRouteName extends RouteName>(
    name: TRouteName,
    params?: RouteParamList[TRouteName]
  ) => void;
  goBack: () => void;
  canGoBack: () => boolean;
  currentRoute: Route | undefined;
}

// Route parametrelerinin tiplerini tanımlıyoruz
export interface RouteParamList {
  Home: undefined;
  Example: undefined;
}

// Route isimlerini bir union type olarak tanımlıyoruz
export type RouteName = keyof RouteParamList;

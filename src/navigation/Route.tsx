import { RouteName } from "./routes";
import { useNavigation } from "./useNavigation";

interface RouteProps {
  name: RouteName;
  screen: React.ComponentType;
}

export function Route({ name, screen: Screen }: RouteProps) {
  const { currentRoute } = useNavigation();
  return currentRoute?.name === name ? <Screen /> : null;
}

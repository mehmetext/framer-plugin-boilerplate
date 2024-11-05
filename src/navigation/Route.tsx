import { motion } from "framer-motion";
import { RouteName } from "./routes";
import { useNavigation } from "./useNavigation";

interface RouteProps {
  name: RouteName;
  screen: React.ComponentType;
}

export function Route({ name, screen: Screen }: RouteProps) {
  const { currentRoute } = useNavigation();
  return currentRoute?.name === name ? (
    <motion.div
      key={name}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Screen />
    </motion.div>
  ) : null;
}

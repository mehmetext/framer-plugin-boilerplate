import { framer } from "framer-plugin";
import "./index.css";
import Home from "./screens/home";
import ExampleScreen from "./screens/example";
import { NavigationProvider, Route } from "./navigation";

framer.showUI({
  position: "top right",
  resizable: true,
});

export function App() {
  return (
    <NavigationProvider initialRoute="Home">
      <Route name="Home" screen={Home} />
      <Route name="Example" screen={ExampleScreen} />
    </NavigationProvider>
  );
}

import { framer } from "framer-plugin";
import "./App.css";

framer.showUI({
  position: "top right",
  width: 240,
  height: 95,
});

export function App() {
  return <main>Example Plugin</main>;
}

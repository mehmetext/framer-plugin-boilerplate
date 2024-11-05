import { framer } from "framer-plugin";
import "./index.css";
import Home from "./screens/home";

framer.showUI({
  position: "top right",
  resize: true,
});

export function App() {
  return <Home />;
}

import { framer } from "framer-plugin";
import "./App.css";
import Button from "./components/button";

framer.showUI({
  position: "top right",
  width: 240,
});

export function App() {
  return (
    <main>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </main>
  );
}

import Button from "../components/button";
import { useNavigation } from "../navigation";
export default function ExampleScreen() {
  const { navigate, goBack, currentRoute } = useNavigation();
  console.log(currentRoute?.params);

  return (
    <div className="bg-red-500">
      <h2>ExampleScreen</h2>
      <Button onClick={() => goBack()}>Click me</Button>
      <Button onClick={() => navigate("Example", { id: "11" })}>
        Click me
      </Button>
    </div>
  );
}

import Button from "../components/button";
import Checkbox from "../components/checkbox";
import Input from "../components/input";
import Segmented from "../components/segmented";
import Select from "../components/select";
import Spinner from "../components/spinner";
import Stepper from "../components/stepper";
import Textarea from "../components/textarea";
import { useNavigation } from "../navigation";

export default function Home() {
  const { navigate } = useNavigation();
  return (
    <main className="p-2 flex flex-col gap-2">
      <Segmented
        items={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
          { value: "maybe", label: "Maybe" },
        ]}
      />
      <Stepper value={10} onChange={(value) => console.log(value)} />
      <Button onClick={() => navigate("Example", { id: "123" })}>
        Primary
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="danger" disabled>
        <Spinner className="bg-[var(--framer-color-text-reversed)]" />{" "}
        Yükleniyor...
      </Button>
      <Input placeholder="input" />
      <Textarea placeholder="textarea" />
      <Select>
        <option value="1">1</option>
        <option value="2">2</option>
      </Select>
      <Input type="color" />
      <Input type="range" />
      <Input type="date" />
      <Input type="time" />
      <Input type="file" />
      <Spinner />
      <Spinner size="large" />
      <Checkbox />
    </main>
  );
}

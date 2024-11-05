import { framer } from "framer-plugin";
import Button from "../components/button";
import Checkbox from "../components/checkbox";
import Input from "../components/input";
import PageContainer from "../components/page-container";
import Segmented from "../components/segmented";
import Select from "../components/select";
import Spinner from "../components/spinner";
import Stepper from "../components/stepper";
import Textarea from "../components/textarea";
import { useNavigation } from "../navigation";
import { Code } from "lucide-react";

export default function Home() {
  const navigation = useNavigation();

  return (
    <PageContainer
      appBar={{
        title: "Framer Plugin",
        actions: (
          <Button
            size="icon"
            variant="secondary"
            onClick={() => navigation.navigate("Example")}
          >
            <Code className="w-4 h-4" />
          </Button>
        ),
      }}
    >
      <Segmented
        items={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
          { value: "maybe", label: "Maybe" },
        ]}
      />
      <Stepper value={10} onChange={(value) => console.log(value)} />
      <Button
        onClick={() => {
          framer.notify("Primary button clicked.");
        }}
      >
        Primary
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="danger" disabled>
        <Spinner className="bg-[var(--framer-color-text-reversed)]" />{" "}
        Yükleniyor...
      </Button>
      <Button variant="success">Success</Button>
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
    </PageContainer>
  );
}

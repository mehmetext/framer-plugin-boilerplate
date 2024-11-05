import Button from "../components/button";
import Checkbox from "../components/checkbox";
import Input from "../components/input";
import PageContainer from "../components/page-container";
import Segmented from "../components/segmented";
import Select from "../components/select";
import Spinner from "../components/spinner";
import Stepper from "../components/stepper";
import Textarea from "../components/textarea";

export default function Home() {
  return (
    <PageContainer appBar={{ title: "Framer Plugin" }}>
      <Segmented
        items={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
          { value: "maybe", label: "Maybe" },
        ]}
      />
      <Stepper value={10} onChange={(value) => console.log(value)} />
      <Button>Primary</Button>
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
    </PageContainer>
  );
}

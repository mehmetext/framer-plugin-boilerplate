import PageContainer from "../components/page-container";

export default function ExampleScreen() {
  return (
    <PageContainer appBar={{ title: "Example" }}>
      <div className="aspect-square bg-green-500 dark:bg-red-500">ads</div>
      <div className="aspect-square bg-red-500 dark:bg-green-500">ads</div>
    </PageContainer>
  );
}

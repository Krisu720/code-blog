import { getDictionary } from "../../../../../dictonaries/config";

const ComponentsHeader = () => {
  const d = getDictionary()
  return (
    <>
      <h1 className="text-6xl font-bold tracking-tighter">{d.Components.title}</h1>
      <h2 className="text-lg text-muted-foreground mt-2">{d.Components.description}</h2>
    </>
  );
};

export default ComponentsHeader;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

export const CodePreviewTabs = ({ children }: { children: ReactNode }) => {
  return (
    <Tabs defaultValue="preview" className="mt-4">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

export const CodePreviewTab = ({
  children,
  code
}: {
  children: ReactNode;
  code?: boolean
}) => {
  return <TabsContent value={code ? "code" :  "preview"}>{children}</TabsContent>;
};

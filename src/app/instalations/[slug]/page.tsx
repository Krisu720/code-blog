import { Mdx } from "@/components/Mdx";
import Sidebar from "@/components/Sidebar";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
interface PageProps {
  params: {
    slug: string;
  };
}

const getDoc = async (slug: string) => {
  const doc = allDocs.find((doc) => {
    return doc.slugAsParams === "instalations/"+slug;
  });

  if (!doc) notFound();

  return doc;
};

const page = async ({ params: { slug } }: PageProps) => {
  const doc = await getDoc(slug);
  return (
    <div className="grid grid-cols-4 lg:grid-cols-6 sm:container">
      <div className="hidden md:block sticky top-14 w-full h-[calc(100vh-3.6rem)]">
        <Sidebar />
      </div>
      <main className="col-span-4 md:col-span-3 lg:col-span-4 md:p-6 p-2">
        <div className="border-b pb-4">
          <h1 className="text-5xl font-bold tracking-tighter">{doc.title}</h1>
          <p className="text-2xl text-muted-foreground mt-2">
            {doc.description}
          </p>
        </div>
        <Mdx code={doc.body.code} />
      </main>
      <aside className="lg:block hidden sticky top-14 w-full h-96 py-2">
        On this page
      </aside>
    </div>
  );
};

export default page;

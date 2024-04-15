import { Mdx } from "@/components/Mdx";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";



interface PageProps {
  params: {
    slug: string;
    locale: string;
  };
}

const getDoc = async (slug: string, lang: string) => {
  const doc = allDocs.find((doc) => {
    return doc.slugAsParams === "instalations/" + slug + `-${lang}`;
  });

  if (!doc) notFound();

  return doc;
};

const Page = async ({ params: { slug, locale } }: PageProps) => {
  const doc = await getDoc(slug, locale);
  return (
    <>
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
      </aside>
    </>
  );
};

export default Page;

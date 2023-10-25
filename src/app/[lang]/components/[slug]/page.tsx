import { Mdx } from "@/components/Mdx";
import ProductCarousell from "@/content/components/productcarousell";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import React from "react";

const getDoc = async (slug: string) => {
  const doc = allDocs.find((doc) => {
    return doc.slugAsParams === "components/" + slug;
  });
  if (!doc) notFound();
  return doc;
};

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const doc = await getDoc(slug);

  return (
    <div className="container">
      <h1 className="text-2xl font-semibold mt-6">{doc.title}</h1>
      <h2 className="text-muted-foreground">
        {doc.description}
      </h2>
      <div className="bg-gray-500/10 h-[35rem] rounded-xl border mt-8 flex justify-center items-center">
          <ProductCarousell/>
      </div>
      <Mdx code={doc.body.code} />
    </div>
  );
};

export default Page;

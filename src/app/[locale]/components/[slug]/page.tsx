import { Mdx } from "@/components/Mdx";
import ProductCarousell from "@/content/components/productcarousell";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import React from "react";

const getDoc = async (slug: string,lang: string) => {
  const doc = allDocs.find((doc) => {
    return doc.slugAsParams === "components/" + slug  + `-${lang}`;
  });
  if (!doc) notFound();
  return doc;
};

const Page = async ({ params: { slug,locale } }: { params: { slug: string,locale:string } }) => {
  const doc = await getDoc(slug,locale);

  return (
    <div className="lg:container">
      <h1 className="text-2xl font-semibold mt-6">{doc.title}</h1>
      <h2 className="text-muted-foreground">
        {doc.description}
      </h2>
      <Mdx code={doc.body.code} />
    </div>
  );
};

export default Page;

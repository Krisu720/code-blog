import { Mdx } from "@/components/Mdx";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import React from "react";

const getDoc = async (slug: string, lang: string) => {
  const doc = allDocs.find((doc) => {
    return doc.slugAsParams === "resources/" + slug + `-${lang}`;
  });
  if (!doc) notFound();
  return doc;
};

const Page = async ({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) => {
  const doc = await getDoc(slug, locale);

  return (
    <div className="lg:container">
      <div className="border-b pb-4">
        <h1 className="text-5xl font-bold tracking-tighter">{doc.title}</h1>
        <p className="text-2xl text-muted-foreground mt-2">{doc.description}</p>
      </div>
      <Mdx code={doc.body.code} />
    </div>
  );
};

export default Page;

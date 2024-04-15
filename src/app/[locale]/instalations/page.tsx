import { getDocs } from "@/lib/navigation";
import { allDocs } from "contentlayer/generated";
import React from "react";
import { parseLocale } from "../../../../dictonaries/config";
import LinkCard from "@/components/LinkCard";

const page = ({ params: { locale } }: { params: { locale: string } }) => {
  const docs = getDocs("instalations", parseLocale(locale));
  return (
    <div className="p-6 col-span-4 md:col-span-3 lg:col-span-5">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 w-full">
        {docs.map((doc) => (
          <LinkCard
            key={doc._id}
            title={doc.title}
            description={doc.description}
            href={doc.slugAsParams.slice(0, -3)}
            tags={doc.tags !== "none" ? doc.tags.split(",") : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default page;

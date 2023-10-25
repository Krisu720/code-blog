import { allDocs } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Page = async ({}) => {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-6xl font-bold tracking-tighter">Components</h1>
      <h2 className="text-lg text-muted-foreground mt-2">
        Code snippets for modern user interface techniques.
      </h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {allDocs.filter((doc)=>doc.slugAsParams.startsWith("components/")).map((doc) => (
          <Link href={"/"+doc.slugAsParams} className="text-start group">
            <div className="bg-gray-500/10 h-60 rounded-3xl border group-hover:border-gray-700 relative overflow-hidden" >
              <Image src="https://uploadthing.com/f/ecc9ea4a-42c1-44e4-bbcc-9684cdd7cbf2-rfbgub.png" className="object-cover" fill alt="preview"/>
            </div>
            <h1 className="mt-2">{doc.title}</h1>
            <h2 className="text-xs text-muted-foreground">{doc.description}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;

import { useTranslations } from "next-intl";
import Image from "next/image";
import { allDocs } from "contentlayer/generated";
import Link from "next/link";
import ComponentsHeader from "./ComponentsHeader";

const Page = ({ params: { locale } }: { params: { locale: string } }) => {

  return (
    <div className="lg:container mx-auto py-4">
      <ComponentsHeader />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {allDocs
          .filter((doc) => doc.slugAsParams.startsWith("components/"))
          .filter((doc) => doc.slugAsParams.endsWith(locale))
          .map((doc) => (
            <Link key={doc._id} href={"/" + doc.slugAsParams.slice(0,-3)} className="text-start group">
              <div className="bg-gray-500/10 h-60 rounded-3xl border dark:group-hover:border-gray-700 group-hover:border-gray-300 relative overflow-hidden">
                <Image
                  src="https://uploadthing.com/f/ecc9ea4a-42c1-44e4-bbcc-9684cdd7cbf2-rfbgub.png"
                  className="object-cover"
                  fill
                  alt="preview"
                />
              </div>
              <h1 className="mt-2">{doc.title}</h1>
              <h2 className="text-xs text-muted-foreground">
                {doc.description}
              </h2>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Page;

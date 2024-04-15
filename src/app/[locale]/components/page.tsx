import { getDocs } from "@/lib/navigation";
import { parseLocale } from "../../../../dictonaries/config";
import ImageLinkCard from "@/components/ImageLinkCard";
const page = ({ params: { locale } }: { params: { locale: string } }) => {
  const docs = getDocs("components", parseLocale(locale));
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ">
      {docs.map((item) => (
        <ImageLinkCard key={item._id} id={item._id} {...item} />
      ))}
    </div>
  );
};

export default page;

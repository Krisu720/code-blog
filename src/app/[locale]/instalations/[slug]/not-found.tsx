import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getDictionary } from "../../../../../dictonaries/config";

export default async function NotFound() {
  const d = getDictionary()
  return (
    <>
      <main className="col-span-4 md:col-span-3 lg:col-span-4 md:p-6 p-2 flex justify-center items-center">
        <div>
          <h1 className="text-3xl">{d.NotFound.title}</h1>
          <p className="text-muted-foreground">{d.NotFound.description}</p>
          <Link
            href="/instalations/"
            className={cn(buttonVariants({ className: "mt-4" }))}
          >
            {d.NotFound.action}
          </Link>
        </div>
      </main>
      <aside className="lg:block hidden sticky top-14 w-full h-96 py-2"></aside>
    </>
  );
}

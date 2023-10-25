import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { checkLang, getDictonary } from "../../../../../dictonaries";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function NotFound() {
  return (
    <>
      <main className="col-span-4 md:col-span-3 lg:col-span-4 md:p-6 p-2 flex justify-center items-center">
        <div>
          <h1 className="text-3xl">Page not found [404]</h1>
          <p className="text-muted-foreground">We can't find the post.</p>
          <Link
            href="/instalations/introduction"
            className={cn(buttonVariants({ className: "mt-4" }))}
          >
            Go back
          </Link>
        </div>
      </main>
      <aside className="lg:block hidden sticky top-14 w-full h-96 py-2"></aside>
    </>
  );
}

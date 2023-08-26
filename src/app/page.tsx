import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-[calc(100vh-3.5rem)]  flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-6xl tracking-tighter font-extrabold">
          code<span className="text-primary">Ready</span>
        </h1>
        <p className="text-2xl max-w-lg text-center">
          Gotowe komponenty i szablony kodu, które oszczędzają czas Web
          Developera.
        </p>
        <div className="flex items-center gap-2">
          <Link href="/instalations/introduction" className={cn(buttonVariants({size:"lg"}))}>Get started</Link>
          <Button variant="ghost" size="lg">
            <Github className="mr-2" />
            Github{" "}
          </Button>
        </div>
      </div>
    </main>
  );
}

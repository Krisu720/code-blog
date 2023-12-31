import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import Link from "next/link";
import {useTranslations} from "next-intl";

export default function Home() {

  const t = useTranslations("Hello");

  return (
    <main className="min-h-[calc(100vh-3.5rem)]  flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-6xl tracking-tighter font-extrabold">
          code<span className="text-primary">Ready</span>
        </h1>
        <p className="text-2xl max-w-lg text-center">
          {t("description")}
        </p>
        <div className="flex items-center gap-2">
          <Link
            href="/instalations/introduction"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {t("action")}
          </Link>
          <a href="https://github.com/Krisu720/code-blog" target="_blank" className={cn(buttonVariants({variant:"ghost",size:"lg"}))}>
            <Github className="mr-2" />
            Github{" "}
          </a>
        </div>
      </div>
    </main>
  );
}

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-6xl tracking-tighter font-extrabold">
          code<span className="text-primary">Ready</span>
        </h1>
        <p className="text-2xl max-w-lg text-center">
          Gotowe komponenty i szablony kodu, które oszczędzają czas Web
          Developera.
        </p>
        <div className="flex items-center gap-2">
          <Button size="lg">Get started</Button>
          <Button variant="ghost" size="lg">
            <Github className="mr-2" />
            Github{" "}
          </Button>
        </div>
      </div>
    </main>
  );
}

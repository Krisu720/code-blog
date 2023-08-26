import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const page = ({}) => {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-6xl font-bold tracking-tighter">Guides</h1>
      <div className=" grid grid-cols-3 gap-6 p-2">
        <Link href="" className="p-6 border rounded-xl  text-start flex-col hover:ring ring-primary transition-all">
          <h1>tRPC + Next.js 13 (app router)</h1>
          <p className="text-muted-foreground">
            Setting up development with brand new app router
          </p>
          <div className="flex gap-2 mt-2">
            <Badge>tRPC</Badge>
            <Badge>Next.js</Badge>
          </div>
        </Link>
        <Link href="" className="p-6 border rounded-xl  text-start flex-col hover:ring ring-primary transition-all">
          <h1>MDX + Next.js 13</h1>
          <p className="text-muted-foreground">
            Create blog website using markdown files support.
          </p>
          <div className="flex gap-2 mt-2">
            <Badge>MDX</Badge>
            <Badge>Next.js</Badge>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default page;

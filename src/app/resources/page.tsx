import { Badge } from "@/components/ui/badge";

const page = ({}) => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-6 p-2">
      <button className="p-6 border rounded-xl flex flex-col hover:ring ring-primary transition-all">
        <h1>tRPC + Next.js 13 (app router)</h1>
        <p className="text-muted-foreground">
          Setting up development with brand new app router
        </p>
        <div className="flex gap-2 mt-2">
          <Badge>tRPC</Badge>
          <Badge>Next.js</Badge>
        </div>
      </button>
      <button className="p-6 border rounded-xl flex flex-col hover:ring ring-primary transition-all">
        <h1>tRPC + Next.js 13 (app router)</h1>
        <p className="text-muted-foreground">
          Setting up development with brand new app router
        </p>
        <div className="flex gap-2 mt-2">
          <Badge>tRPC</Badge>
          <Badge>Next.js</Badge>
        </div>
      </button>
      <button className="p-6 border rounded-xl flex flex-col hover:ring ring-primary transition-all">
        <h1>tRPC + Next.js 13 (app router)</h1>
        <p className="text-muted-foreground">
          Setting up development with brand new app router
        </p>
        <div className="flex gap-2 mt-2">
          <Badge>tRPC</Badge>
          <Badge>Next.js</Badge>
        </div>
      </button>
    
    </div>
  );
};

export default page;

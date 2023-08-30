import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-6 sm:container">
      <div className="hidden md:block w-full h-[calc(100vh-3.6rem)] md:m-6 m-2">
        <Skeleton className="h-6 w-32 " />
        <div className="ml-5">
          {Array.from([1, 2, 3, 4]).map((i) => (
            <Skeleton className="h-6 w-32 mt-2" />
          ))}
        </div>
      </div>
      <main className="col-span-4 md:col-span-3 lg:col-span-4 md:p-6 p-2">
        <div className="border-b pb-4">
          <Skeleton className="h-12 w-60" />
          <Skeleton className="h-8 w-44 mt-2" />
        </div>
        <Skeleton className="h-[35rem] w-full mt-4" />
      </main>
      <aside className="lg:block hidden w-full h-96 md:m-6 m-2">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-32 mt-2" />
        <Skeleton className="h-4 w-32 mt-2" />
      </aside>
    </div>
  );
};

export default loading;

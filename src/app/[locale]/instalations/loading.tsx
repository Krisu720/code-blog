import { Skeleton } from "@/components/ui/skeleton";

const loading = ({}) => {
  return (
    <>
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
    </>
  );
};

export default loading;
{
  /* <main className="col-span-4 md:col-span-3 lg:col-span-4 md:p-6 p-2">
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
      </aside> */
}

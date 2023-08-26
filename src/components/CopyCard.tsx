import { FC } from "react";

interface CopyCardProps {}

const CopyCard: FC<CopyCardProps> = ({}) => {
  return (
    <div className="flex mt-2">
      <button className="border rounded-2xl p-6 hover:ring ring-primary transition-all cursor-pointer focus:ring-green-500">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-primary">pnpm</h1>
          <p className="text-lg">contentlayer</p>
        </div>
        <div className="flex">
          <span className="uppercase text-muted-foreground text-xs">
            Quick install prompt copy
          </span>
        </div>
      </button>
    </div>
  );
};

export default CopyCard;

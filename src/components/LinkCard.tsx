import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

const LinkCard = ({
  title,
  description,
  href,
  tags
}: {
  title: string;
  description: string;
  href: string;
  tags?: string[]
}) => {
  return (
    <Link
      href={href}
      className="p-6 border rounded-xl  text-start flex-col hover:ring ring-primary transition-all"
    >
      <h1 className="line-clamp-2">{title}</h1>
      <p className="text-muted-foreground line-clamp-2">{description}</p>
      <div className="flex gap-2 overflow-hidden mt-auto pt-2">
        {tags?.map((tag) => (<Badge key={tag}>{tag}</Badge>))}
      </div>
    </Link>
  );
};

export default LinkCard;

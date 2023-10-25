import Link from "next/link";
import { FC } from "react";
interface MDXLinkProps {
  href: string;
  children: React.ReactNode;
}

const MDXLink: FC<MDXLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="text-primary underline underline-offset-2">
      {children}
    </Link>
  );
};

export default MDXLink;

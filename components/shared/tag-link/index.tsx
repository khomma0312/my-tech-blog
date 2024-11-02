import { Tag } from "lucide-react";
import Link from "next/link";

type Props = {
  tag: string;
};

const TagLink = ({ tag }: Props) => {
  return (
    <Link
      href={`/posts?tag=${tag}`}
      className="flex items-center gap-1 text-xs md:text-sm text-primary hover:text-primary/80"
    >
      <Tag size={15} />
      <span>{tag}</span>
    </Link>
  );
};

export default TagLink;

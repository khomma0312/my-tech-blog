import { Tag } from "lucide-react";
import Link from "next/link";
import { formatTagForLink } from "@/utils/common";

type Props = {
  tag: string;
};

const TagLink = ({ tag }: Props) => {
  const tagForLink = formatTagForLink(tag);
  return (
    <Link
      href={`/tags/${tagForLink}`}
      className="flex items-center gap-1 text-xs md:text-sm text-primary hover:text-primary/80"
    >
      <Tag size={15} />
      <span>{tag}</span>
    </Link>
  );
};

export default TagLink;

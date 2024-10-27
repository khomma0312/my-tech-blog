import Link from "next/link";

type Props = {
  tag: string;
};

const TagLink = ({ tag }: Props) => {
  return (
    <Link
      href={`/posts?tag=${tag}`}
      className="bg-primary-50/65 border border-slate-600 rounded-md px-1 py-0.5 text-sm hover:bg-primary-50"
    >
      {tag}
    </Link>
  );
};

export default TagLink;

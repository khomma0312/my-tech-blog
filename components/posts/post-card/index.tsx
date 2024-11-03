import TagLink from "@/components/shared/tag-link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock } from "lucide-react";
import Link from "next/link";

type Props = {
  post: {
    slug: string;
    title: string;
    date: string;
    tags?: string[];
  };
};

const PostCard = ({ post }: Props) => {
  return (
    <Card
      key={post.title}
      className="grid grid-rows-[1fr_70px] border-primary-100 rounded-lg"
    >
      <CardContent className="p-0 text-center bg-gradient-to-br from-background to-primary-50/50 rounded-t-lg">
        <Link
          className="flex justify-center items-center w-full h-full p-12 md:px-8"
          href={`/posts/${post.slug}`}
        >
          <h3 className="text-xl font-semibold md:text-lg">{post.title}</h3>
        </Link>
      </CardContent>
      <CardFooter className="grid grid-rows-2 border-t border-primary-100 p-4 text-xs md:text-sm md:py-3">
        <div className="flex items-center gap-1">
          <Clock size={15} className="text-slate-400" />
          <time
            dateTime={new Date(post.date).toISOString()}
            className="text-slate-400"
          >
            {post.date}
          </time>
        </div>
        {post.tags && (
          <ul className="flex gap-2 pt-1.5">
            {post.tags.map((tag) => (
              <li key={tag}>
                <TagLink tag={tag} />
              </li>
            ))}
          </ul>
        )}
      </CardFooter>
    </Card>
  );
};

export default PostCard;

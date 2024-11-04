import PostCard from "@/components/posts/post-card";

type Props = {
  posts: {
    slug: string;
    title: string;
    date: string;
    tags?: string[];
  }[];
};

const PostCardsGrid = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default PostCardsGrid;

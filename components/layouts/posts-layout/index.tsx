import PostCard from "@/components/posts/post-card";

type Props = {
  posts: {
    slug: string;
    title: string;
    date: string;
    tags?: string[];
  }[];
};

const PostsLayout = ({ posts }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-12 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* TODO: 記事数が増えてきたらページネーションをおく */}
    </div>
  );
};

export default PostsLayout;

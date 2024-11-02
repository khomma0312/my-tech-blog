import { getAllPostsSlug, getPostBySlug } from "@/features/posts/api";
import PostCard from "@/components/posts/post-card";

const Home = async () => {
  const slugs = getAllPostsSlug();
  const posts = slugs.map((slug) => {
    const post = getPostBySlug(slug);
    return {
      slug,
      title: post.data.title,
      date: post.data.date,
      tags: post.data?.tags,
    };
  });

  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-12 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>

      {/* TODO: ページネーションをおく */}
    </div>
  );
};

export default Home;

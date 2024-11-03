import { getAllPostsSlug, getPostBySlug } from "@/features/posts/api";
import PostCard from "@/components/posts/post-card";

type Posts = {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
};

const Home = async () => {
  const slugs = getAllPostsSlug();
  const posts: Posts[] = slugs.map((slug) => {
    const { data } = getPostBySlug(slug);
    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags,
    };
  });

  // markdownファイル内のdateフィールドで降順にソート
  posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-12 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>

      {/* TODO: 記事数が増えてきたらページネーションをおく */}
    </div>
  );
};

export default Home;

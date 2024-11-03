import { getAllPostsSlug, getPostBySlug } from "@/features/posts/api";
import PostsLayout from "@/components/layouts/posts-layout";

const Home = async () => {
  const slugs = getAllPostsSlug();
  const posts = slugs.map((slug) => {
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

  return <PostsLayout posts={posts} />;
};

export default Home;

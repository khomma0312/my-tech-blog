import { getAllPostsOrderedByDate } from "@/features/posts/api";
import PostListLayout from "@/components/layouts/post-list-layout";
import PostCardsGrid from "@/components/layouts/post-cards-grid";

const Home = async () => {
  const posts = getAllPostsOrderedByDate();
  // markdownファイル内のdateフィールドで降順にソート
  posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return (
    <PostListLayout>
      <PostCardsGrid posts={posts} />
    </PostListLayout>
  );
};

export default Home;

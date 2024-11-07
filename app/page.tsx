import { getAllPostsOrderedByDate } from "@/features/posts/api";
import PostListLayout from "@/components/layouts/post-list-layout";
import CardsGrid from "@/components/layouts/cards-grid";
import PostCard from "@/components/posts/post-card";

const Home = async () => {
  const posts = getAllPostsOrderedByDate();
  // markdownファイル内のdateフィールドで降順にソート
  posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return (
    <PostListLayout>
      <CardsGrid>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </CardsGrid>
    </PostListLayout>
  );
};

export default Home;

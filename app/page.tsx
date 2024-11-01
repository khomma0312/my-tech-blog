import { getAllPostsSlug, getPostBySlug } from "@/features/posts/api";
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
} from "@/components/ui/card";

type Posts = {
  title: string;
  date: string;
  tags?: string[] | undefined;
};

const Home = async () => {
  const slugs = getAllPostsSlug();
  const posts: Posts[] = slugs.map((slug) => {
    const post = getPostBySlug(slug);
    return {
      title: post.data.title,
      date: post.data.date,
      tags: post.data?.tags,
    };
  });

  return (
    <div className="max-w-screen-xl w-100 mx-auto px-6 pt-12 pb-32">
      <div className="grid grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.title} className="border-primary-100">
            <CardContent>{post.title}</CardContent>
          </Card>
        ))}
      </div>

      {/* TODO: ページネーションをおく */}
    </div>
  );
};

export default Home;

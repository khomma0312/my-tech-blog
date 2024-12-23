import { Metadata } from "next";
import PostListLayout from "@/components/layouts/post-list-layout";
import CardsGrid from "@/components/layouts/cards-grid";
import PostCard from "@/components/posts/post-card";
import TagLink from "@/components/shared/tag-link";
import { getAllPostsOrderedByDate } from "@/features/posts/api";
import { formatTagForLink } from "@/lib/utils";

export const generateMetadata = ({
  params,
}: {
  params: { tag: string };
}): Metadata => {
  const { tag } = params;

  return {
    title: `タグ: ${tag}`,
  };
};

const Tag = ({ params }: { params: { tag: string } }) => {
  const { tag } = params;
  const posts = getAllPostsOrderedByDate();

  const postsWithSelectedTag = posts.filter((post) => {
    // タグからスペースの削除などをTagLinkコンポーネント側でしているので、ここの各タグにも同じ整形処理をかけて一致するようにする
    const postTags = post.tags?.map((postTag) => formatTagForLink(postTag));
    return postTags?.includes(tag);
  });

  const tagToDisplay = postsWithSelectedTag[0]?.tags?.find(
    (postTag) => postTag && formatTagForLink(postTag) === tag
  );

  return (
    <PostListLayout>
      {tagToDisplay ? (
        <div className="flex gap-2 items-center pb-6">
          <h1 className="text-sm md:text-base font-semibold">Tagged with:</h1>
          <TagLink tag={tagToDisplay} />
        </div>
      ) : (
        <h1 className="text-sm md:text-base font-semibold">
          指定されたタグが存在しませんでした。
        </h1>
      )}
      <CardsGrid>
        {postsWithSelectedTag.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </CardsGrid>
    </PostListLayout>
  );
};

export default Tag;

import { Metadata } from "next";
import PageTitle from "@/components/shared/page-title";
import TagLink from "@/components/shared/tag-link";
import { getAllPosts } from "@/features/posts/api";

export const metadata: Metadata = {
  title: "タグ一覧",
};

const Tags = () => {
  const posts = getAllPosts();
  const tags = posts.map((post) => (post.tags ? post.tags : []));
  const uniquedTags = tags
    .flat()
    .filter((tag, index, self) => self.indexOf(tag) === index);

  return (
    <div className="mx-auto max-w-[460px] md:max-w-prose py-8">
      <PageTitle>タグ一覧</PageTitle>
      {uniquedTags && (
        <div>
          <ul className="flex items-center gap-5">
            {uniquedTags.map((tag) => (
              <li key={tag}>
                <TagLink tag={tag} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Tags;

import { getPostBySlug } from "@/features/posts/api";
import { markdownToHtml } from "@/utils/markdown-to-html";
import PostHeader from "@/components/posts/post-header";
import PostBody from "@/components/posts/post-body";

// TODO: ページの内容に合わせてページのmetadataを作る
// export const metadata = {};

// TODO: getStaticPropsでページを静的化する

type Props = {
  params: {
    slug: string;
  };
};

const Post = async ({ params }: Props) => {
  const { slug } = params;

  // 対象のslugのmarkdownファイルの内容を取得
  const post = getPostBySlug(slug);
  // markdownからHTMLに変換
  const content = await markdownToHtml(post.content || "");

  // markdownのメタデータを取得
  const { title, date, tags } = post.data;

  return (
    <div className="mx-auto max-w-[460px] md:max-w-prose py-8">
      <article>
        <PostHeader title={title} date={date} tags={tags} />
        <PostBody content={content} />
      </article>
    </div>
  );
};

export default Post;

import { Metadata } from "next";
import { getAllPostsSlug, getPostBySlug } from "@/features/posts/api";
import { markdownToHtml } from "@/utils/html-converter";
import PostHeader from "@/components/posts/post-header";
import PostBody from "@/components/posts/post-body";
import Divider from "@/components/shared/divider";
import PostFooter from "@/components/posts/post-footer";

type StaticParams = {
  slug: string;
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const { slug } = params;
  const post = getPostBySlug(slug);
  const { data } = post;

  return {
    title: data.title,
  };
};

export const dynamicParams = false;

export const generateStaticParams = async (): Promise<StaticParams[]> => {
  const slugs = getAllPostsSlug();
  return slugs.map((slug) => ({
    slug,
  }));
};

const Post = async ({ params }: { params: Promise<StaticParams> }) => {
  const { slug } = await params;

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
        <Divider />
        <PostFooter />
      </article>
    </div>
  );
};

export default Post;

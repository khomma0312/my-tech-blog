import { getPostBySlug } from "@/features/posts/api";
import { markdownToHtml } from "@/utils/markdown-to-html";

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

  return <article>{content}</article>;
};

export default Post;

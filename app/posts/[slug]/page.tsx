import parse from "html-react-parser";
import DOMPurify from "dompurify";
import marked from "@/lib/marked";
import { getPostBySlug } from "@/features/posts/api";

type Props = {
  params: {
    slug: string;
  };
};

const Post = async ({ params }: Props) => {
  const { slug } = params;
  // 特定ディレクトリからmarkdownファイルを取得
  const post = getPostBySlug(slug);

  // postからHTMLへ変換
  const html = await marked.parse(post.content || "");
  const sanitizedHtml = DOMPurify.sanitize(html);
  const content = parse(sanitizedHtml);

  return <article>{content}</article>;
};

export default Post;

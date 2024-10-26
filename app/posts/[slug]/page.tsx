import { getPostBySlug } from "@/features/posts/api";
import { markdownToHtml } from "@/utils/markdown-to-html";
import "highlight.js/styles/github-dark.css";
import styles from "@/styles/post.module.css";

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

  return (
    <div className="mx-auto max-w-prose">
      <article className={styles.markdown}>{content}</article>
    </div>
  );
};

export default Post;

import Link from "next/link";

const PostFooter = () => {
  return (
    <section className="py-10">
      <Link
        href="/posts"
        className="text-primary hover:text-primary-500 text-sm"
      >
        &lt; 記事一覧に戻る
      </Link>
    </section>
  );
};

export default PostFooter;

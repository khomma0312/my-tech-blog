import PostListLayout from "@/components/layouts/post-list-layout";
import CardsGrid from "@/components/layouts/cards-grid";
import { JSDOM } from "jsdom";
import ZennCard from "@/components/zenn/zenn-card";
import { getZennPostHtmls, getZennPosts } from "@/features/zenn/api";
import { extractOgpDataFromHead } from "@/utils/ogp-extracter";

export const metadata = {
  title: "Zenn記事一覧",
};

const Zenn = async () => {
  // 自分のzennの投稿一覧を取得する
  const posts = await getZennPosts();
  // 各記事のHTMLを取得
  const postHtmls = await getZennPostHtmls(posts);

  const postOgps = postHtmls.map((html) => {
    // HTML文字列を解析し、headタグ要素を取得
    const { document } = new JSDOM(html).window;
    const { head } = document;
    // headタグ内から必要なOGPデータを取得
    const ogpData = extractOgpDataFromHead(head);

    return ogpData;
  });

  // TODO: 開発、テスト用にモックサーバーを用意したほうが良さそう
  return (
    <PostListLayout>
      <CardsGrid>
        {postOgps.map((ogp) => (
          <ZennCard key={ogp.title} post={ogp} />
        ))}
      </CardsGrid>
    </PostListLayout>
  );
};

export default Zenn;

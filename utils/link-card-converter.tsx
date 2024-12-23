import YouTubeEmbed from "@/components/posts/youtube-embed";
import XLinkCard from "@/components/posts/x-link-card";
import LinkCardContainer from "@/components/posts/link-card-container";

export const convertLinkToCard = (href: string) => {
  // YouTubeか、Twitterか、普通のリンクかでコンポーネントを出し分ける(正規表現とかで判定)
  const matches = href.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)\/?(.*)/i);
  const domain = matches ? matches[1] : "";
  const path = matches ? matches[2] : "";

  if (
    (domain === "youtube.com" && path.startsWith("watch")) ||
    domain === "youtu.be"
  ) {
    return <YouTubeEmbed url={href} />;
  }

  if (["x.com", "twitter.com"].includes(domain) && path.includes("status")) {
    return <XLinkCard url={href} options={{ theme: "dark" }} />;
  }

  return <LinkCardContainer url={href} />;
};

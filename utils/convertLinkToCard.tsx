import YouTubeEmbed from "@/components/posts/youtube-embed";
import LinkCard from "@/components/posts/link-card";

export const convertLinkToCard = (href: string) => {
  // YouTubeか、Twitterか、普通のリンクかでコンポーネントを出し分ける(正規表現とかで判定)
  const matches = href.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)\/?(.*)/i);
  const domain = matches ? matches[1] : "";
  const path = matches ? matches[2] : "";

  console.log(matches);

  switch (domain) {
    case "youtube.com":
      return path.startsWith("watch") ? (
        <YouTubeEmbed href={href} />
      ) : (
        <LinkCard href={href} />
      );
    // case "x.com":
    //   return <XLinkCard href={href} />;
    default:
      return <LinkCard href={href} />;
  }
};

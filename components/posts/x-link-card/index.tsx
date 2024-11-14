"use client";

import { useEffect, useRef } from "react";

type Props = {
  url: string;
  options?: {
    cards?: "hidden";
    theme?: "dark" | "light";
    width?: number;
  };
};

const XLinkCard = (props: Props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const key = JSON.stringify(props);
  const { url, options } = props;
  // twitter.comでないとembedに変換されないので文字列を置換
  const twitterUrl = url.replace("x.com", "twitter.com");

  useEffect(() => {
    if (rootRef.current) {
      window.twttr?.widgets.load(rootRef.current);
    }
  }, [key]);

  return (
    <div ref={rootRef} key={key}>
      <blockquote
        className="twitter-tweet"
        data-cards={options?.cards}
        data-theme={options?.theme}
        data-width={options?.width}
      >
        <a href={twitterUrl}>{twitterUrl}</a>
      </blockquote>
    </div>
  );
};

export default XLinkCard;

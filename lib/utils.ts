import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { JSDOM } from "jsdom";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTagForLink = (tag: string) => {
  return tag.toLowerCase().replaceAll(" ", "");
};

export const extractOgpDataFromHead = (head: HTMLHeadElement) => {
  return (
    // HTMLCollectionのままではループが回せないので、[...head.children]で配列にしてiterableなオブジェクトにする
    [...head.children]
      // metaタグのpropertyで"og"を含むもののみ取得
      .filter(
        (elem) =>
          elem.tagName === "META" &&
          elem.getAttribute("property")?.includes("og:")
      )
      // 必要なOGPデータをオブジェクトにまとめる
      .reduce((acc, cur) => {
        const content = cur.getAttribute("content");

        if (cur.getAttribute("property") === "og:title") {
          return { ...acc, title: content || "" };
        }

        if (cur.getAttribute("property") === "og:image") {
          return { ...acc, image: content || "" };
        }

        if (cur.getAttribute("property") === "og:url") {
          return { ...acc, url: content || "" };
        }

        if (cur.getAttribute("property") === "og:description") {
          return { ...acc, description: content || "" };
        }
        return acc;
      }, {} as { title: string; image: string; url: string; description: string })
  );
};

export const getOgpDataFromUrl = async (url: string) => {
  const html = await fetch(url).then((res) => res.text());
  // HTML文字列を解析し、headタグ要素を取得
  const { document } = new JSDOM(html).window;
  const { head } = document;
  // headタグ内から必要なOGPデータを取得
  const ogpData = extractOgpDataFromHead(head);

  return ogpData;
};

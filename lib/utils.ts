import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
        if (cur.getAttribute("property") === "og:title") {
          const content = cur.getAttribute("content");
          return { ...acc, title: content || "" };
        }

        if (cur.getAttribute("property") === "og:image") {
          const content = cur.getAttribute("content");
          return { ...acc, image: content || "" };
        }

        if (cur.getAttribute("property") === "og:url") {
          const content = cur.getAttribute("content");
          return { ...acc, url: content || "" };
        }
        return acc;
      }, {} as { title: string; image: string; url: string })
  );
};

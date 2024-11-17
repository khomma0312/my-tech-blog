import marked from "@/lib/marked";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import parse, { Element } from "html-react-parser";
import { convertLinkToCard } from "./link-card-converter";
import { extractOgpDataFromHead } from "./ogp-extracter";

export const markdownToHtml = async (content: string) => {
  const html = await marked.parse(content || "");

  const window = new JSDOM("").window;
  const purify = DOMPurify(window);
  const sanitizedHtml = purify.sanitize(html);

  return parse(sanitizedHtml, {
    replace(domNode) {
      // ブロックレベルのリンクのみカード化するため、pタグの要素を取得
      if (domNode instanceof Element && domNode.name === "p") {
        const linkNode = domNode.children[0] as Element;
        // aタグかつ、文字にリンクを貼っていない(hrefとタグ内のテキストが同じ)場合のみ取得
        if (
          linkNode.name === "a" &&
          "data" in linkNode.children[0] &&
          linkNode.children[0].data === linkNode.attribs.href
        ) {
          return convertLinkToCard(linkNode.attribs.href);
        }
      }
    },
  });
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

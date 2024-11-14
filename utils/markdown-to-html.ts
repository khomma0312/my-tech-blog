import marked from "@/lib/marked";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import parse, { Element } from "html-react-parser";
import { convertLinkToCard } from "./convertLinkToCard";

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

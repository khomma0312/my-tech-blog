import marked from "@/lib/marked";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import parse from "html-react-parser";

export const markdownToHtml = async (content: string) => {
  const html = await marked.parse(content || "");

  const window = new JSDOM("").window;
  const purify = DOMPurify(window);
  const sanitizedHtml = purify.sanitize(html);

  return parse(sanitizedHtml);
};

import { Marked } from "marked";
import hljs from "highlight.js";

// 元々のコードブロックのrendererのロジックは以下参照
// https://github.com/markedjs/marked/blob/59d5350fdf1b866af749372808ee60f0bf3060d8/src/Renderer.ts#L24
const escapeTest = /[&<>"']/;
const escapeReplace = new RegExp(escapeTest.source, "g");
const escapeReplacements: { [index: string]: string } = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
const getEscapeReplacement = (ch: string) => escapeReplacements[ch];

const escape = (html: string) => {
  if (escapeTest.test(html)) {
    return html.replace(escapeReplace, getEscapeReplacement);
  }
  return html;
};

const marked = new Marked({
  gfm: true,
  renderer: {
    code({ text, lang }) {
      const langString = (lang || "").match(/^\S*/)?.[0];
      const fileInfo = langString ? langString.split(":") : [];
      const fileName = fileInfo[1] ? fileInfo[1] : "";
      const language = hljs.getLanguage(fileInfo[0] || "")
        ? fileInfo[0]
        : "plaintext";

      const code = text.replace(/\n$/, "") + "\n";

      return (
        `<pre><span class="codeblock-file-info">${
          fileName ? fileName : language
        }</span><code class="hljs language-` +
        escape(language) +
        '">' +
        hljs.highlight(code, { language }).value +
        "</code></pre>\n"
      );
    },
  },
});

export default marked;

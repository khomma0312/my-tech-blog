import { http, HttpResponse, type RequestHandler } from "msw";
import { zennArticlesMock } from "./data/zenn/articles";

const zennArticlesHandler = http.get("https://zenn.dev/api/articles", () => {
  return HttpResponse.json(zennArticlesMock());
});

export const handlers: RequestHandler[] = [zennArticlesHandler];

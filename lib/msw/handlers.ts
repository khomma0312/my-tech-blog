import { http, HttpResponse, type RequestHandler } from "msw";
import { zennArticlesMock } from "@/__mocks__/api/zenn/articles";

const zennArticlesHandler = http.get("https://zenn.dev/api/articles", () => {
  return HttpResponse.json(zennArticlesMock);
});

export const handlers: RequestHandler[] = [zennArticlesHandler];

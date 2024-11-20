import { server } from "@/lib/msw/server";

import { zennArticlesMock } from "@/__mocks__/api/zenn/articles";
import { getZennPosts } from ".";

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
//  Close server after all tests
afterAll(() => server.close());
// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());

describe("features/getZennPosts", () => {
  test("Zennのポストが正しく取得できているか", async () => {
    const res = await getZennPosts();

    expect(res).toEqual(zennArticlesMock.articles);
  });
});

export type ZennPosts = {
  articles: {
    id: number;
    post_type: string;
    title: string;
    slug: string;
    comments_count: number;
    liked_count: number;
    body_letters_count: number;
    article_type: string;
    emoji: string;
    is_suspending_private: boolean;
    published_at: string;
    body_updated_at: string;
    source_repo_updated_at: boolean | null;
    pinned: boolean;
    path: string;
    user: {
      id: number;
      username: string;
      name: string;
      avatar_small_url: string;
    };
    publication: null;
  }[];
};

export const getZennPosts = async () => {
  const res = await fetch(
    `https://zenn.dev/api/articles?username=${process.env.ZENN_USERNAME}&order=latest`
  );
  const data: ZennPosts = await res.json();
  return data.articles;
};

export const getZennPostHtmls = async (posts: { path: string }[]) => {
  const postUrls = posts.map((post) => `https://zenn.dev${post.path}`);

  const allPostHtml = await Promise.all(
    postUrls.map((url) => fetch(url).then((res) => res.text()))
  );

  return allPostHtml;
};

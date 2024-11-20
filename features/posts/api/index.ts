import { readdirSync, readFileSync } from "fs";
import { extname, join } from "path";
import matter from "gray-matter";

const getPostsDir = (dirPath: string | undefined) =>
  dirPath ? dirPath : join(process.cwd(), "markdown");

export const getPostBySlug = (slug: string, markdownDirPath?: string) => {
  const postsDir = getPostsDir(markdownDirPath);
  const path = join(postsDir, `${slug}.md`);

  const fileContents = readFileSync(path, { encoding: "utf-8" });
  const { data, content } = matter(fileContents);

  return { data, slug, content };
};

export const getAllPostsSlug = (markdownDirPath?: string) => {
  const postsDir = getPostsDir(markdownDirPath);
  const files = readdirSync(postsDir, { encoding: "utf-8" });
  const markdownFiles = files.filter((file) => extname(file) === ".md");
  return markdownFiles.map((file) => file.replace(".md", ""));
};

export const getAllPosts = (markdownDirPath?: string) => {
  const slugs = getAllPostsSlug(markdownDirPath);
  const posts = slugs.map((slug) => {
    const { data } = getPostBySlug(slug, markdownDirPath);
    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags,
    } as {
      slug: string;
      title: string;
      date: string;
      tags?: string[];
    };
  });

  return posts;
};

export const getAllPostsOrderedByDate = () => {
  const posts = getAllPosts();
  posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return posts;
};

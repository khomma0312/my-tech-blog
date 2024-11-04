import { readdirSync, readFileSync } from "fs";
import { extname, join } from "path";
import matter from "gray-matter";

const postsDir = join(process.cwd(), "markdown");

export const getPostBySlug = (slug: string) => {
  const path = join(postsDir, `${slug}.md`);
  const fileContents = readFileSync(path, { encoding: "utf-8" });
  const { data, content } = matter(fileContents);

  return { data, slug, content };
};

export const getAllPostsSlug = () => {
  const files = readdirSync(postsDir, { encoding: "utf-8" });
  const markdownFiles = files.filter((file) => extname(file) === ".md");
  return markdownFiles.map((file) => file.replace(".md", ""));
};

export const getAllPosts = () => {
  const slugs = getAllPostsSlug();
  const posts = slugs.map((slug) => {
    const { data } = getPostBySlug(slug);
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

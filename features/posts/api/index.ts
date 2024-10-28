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

import { readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDir = join(process.cwd(), "markdown");

export const getPostBySlug = (slug: string) => {
  const path = join(postsDir, `${slug}.md`);
  const fileContents = readFileSync(path, { encoding: "utf-8" });
  const { data, content } = matter(fileContents);

  return { data, slug, content };
};

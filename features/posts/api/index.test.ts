import { vi } from "vitest";
import { fs, vol } from "memfs";
import { join } from "path";
import { getAllPosts, getAllPostsSlug, getPostBySlug } from ".";

vi.mock("node:fs");
vi.mock("node:fs/promises");

beforeEach(() => {
  // reset the state of in-memory fs
  vol.reset();
});

const testContent = `
---
title: テスト
date: 2024-11-20 0:00
tags: ["Next.js", "React"]
---

## h2タイトル`;

describe("features/getPostBySlug", () => {
  test("マークダウンファイルのコンテンツ読み取り", () => {
    const fileName = "test";
    const dir = "tmp";
    const filePath = join(dir, `${fileName}.md`);

    // テスト用ディレクトリとファイルを作成
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, testContent);

    // テスト対象関数を実行
    const { content } = getPostBySlug(fileName, dir);
    expect(content).toBe(testContent);
  });
});

describe("features/getAllPostsSlug", () => {
  test("マークダウンファイルのファイル名読み取り", () => {
    const fileName1 = "test1";
    const fileName2 = "test2";
    const dir = "tmp";
    const filePath1 = join(dir, `${fileName1}.md`);
    const filePath2 = join(dir, `${fileName2}.md`);

    // テスト用ディレクトリとファイルを作成
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath1, testContent);
    fs.writeFileSync(filePath2, testContent);

    // テスト対象関数を実行
    const slugs = getAllPostsSlug(dir);
    expect(slugs[0]).toBe(fileName1);
    expect(slugs[1]).toBe(fileName2);
  });
});

describe("features/getAllPosts", () => {
  test("全マークダウンファイルのコンテンツ読み取り", () => {
    const fileName = "test";
    const dir = "tmp";
    const filePath = join(dir, `${fileName}.md`);

    // テスト用ディレクトリとファイルを作成
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, testContent);

    // テスト対象関数を実行
    const posts = getAllPosts(dir);
    expect(posts[0].slug).toBe(fileName);
  });
});

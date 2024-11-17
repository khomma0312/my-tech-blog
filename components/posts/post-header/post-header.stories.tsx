import type { Meta, StoryObj } from "@storybook/react";
import PostHeader from ".";
import { expect, within } from "@storybook/test";

const meta = {
  title: "components/PostHeader",
  component: PostHeader,
} satisfies Meta<typeof PostHeader>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "テスト投稿",
    date: "2024-11-16",
    tags: ["Next.js", "React Testing Library"],
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByRole("heading", { level: 1 });
    const time = canvas.getByRole("time");
    const tags = canvas.getAllByRole("listitem");

    await expect(title.textContent).toBe("テスト投稿");
    await expect(time.textContent).toBe("投稿日時: 2024-11-16");

    await expect(tags).toHaveLength(2);
    await expect(tags[0]).toHaveTextContent("Next.js");
    await expect(tags[1]).toHaveTextContent("React Testing Library");
  },
};

export const NoTags: Story = {
  args: {
    title: "テスト投稿",
    date: "2024-11-16",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByRole("heading", { level: 1 });
    const time = canvas.getByRole("time");
    const tags = canvas.queryByRole("listitem");

    await expect(title.textContent).toBe("テスト投稿");
    await expect(time.textContent).toBe("投稿日時: 2024-11-16");

    await expect(tags).toBeNull();
  },
};

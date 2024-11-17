import type { Meta, StoryObj } from "@storybook/react";
import PostCard from ".";
import { expect, within } from "@storybook/test";

const meta = {
  title: "components/PostCard",
  component: PostCard,
} satisfies Meta<typeof PostCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: {
      slug: "post-card-story",
      title: "テスト投稿",
      date: "2024-11-16",
      tags: ["Next.js", "React Testing Library"],
    },
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tags = canvas.getAllByRole("listitem");

    await expect(tags).toHaveLength(2);
    await expect(tags[0]).toHaveTextContent("Next.js");
    await expect(tags[1]).toHaveTextContent("React Testing Library");
  },
};

export const NoTags: Story = {
  args: {
    post: {
      slug: "post-card-story",
      title: "テスト投稿",
      date: "2024-11-16",
    },
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole("listitem")).toBeNull();
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import PostBody from ".";
import { expect, within } from "@storybook/test";

const meta = {
  title: "components/PostBody",
  component: PostBody,
} satisfies Meta<typeof PostBody>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: (
      <div>
        <h2>テスト投稿</h2>
        <p>これは本文です。</p>
      </div>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = canvas.getByRole("heading", { level: 2 });
    const paragraph = canvas.getByRole("paragraph");

    await expect(title.textContent).toBe("テスト投稿");
    await expect(paragraph.textContent).toBe("これは本文です。");
  },
};

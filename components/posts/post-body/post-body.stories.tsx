import type { Meta, StoryObj } from "@storybook/react";
import PostBody from ".";

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
};

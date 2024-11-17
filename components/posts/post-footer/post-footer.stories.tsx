import type { Meta, StoryObj } from "@storybook/react";
import PostFooter from ".";

const meta = {
  title: "components/PostFooter",
  component: PostFooter,
} satisfies Meta<typeof PostFooter>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

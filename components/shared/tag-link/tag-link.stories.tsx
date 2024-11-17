import type { Meta, StoryObj } from "@storybook/react";
import TagLink from ".";

const meta = {
  title: "components/TagLink",
  component: TagLink,
} satisfies Meta<typeof TagLink>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tag: "Next.js",
  },
};

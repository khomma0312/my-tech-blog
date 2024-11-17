import type { Meta, StoryObj } from "@storybook/react";
import YouTubeEmbed from ".";

const meta = {
  title: "components/YouTubeEmbed",
  component: YouTubeEmbed,
} satisfies Meta<typeof YouTubeEmbed>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "https://www.youtube.com/watch?v=6t2j1Asw8UA",
  },
};

export const ShareLink: Story = {
  args: {
    url: "https://youtu.be/6t2j1Asw8UA?si=tvhUfRhkuWrgaK0O",
  },
};

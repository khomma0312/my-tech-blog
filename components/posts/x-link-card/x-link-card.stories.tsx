import type { Meta, StoryObj } from "@storybook/react";
import XLinkCard from ".";
import Script from "next/script";

const meta = {
  title: "components/XLinkCard",
  component: XLinkCard,
  decorators: [
    (Story) => {
      return (
        <>
          <Story />
          <Script
            id="twitter-embed-script"
            src="https://platform.twitter.com/widgets.js"
          />
        </>
      );
    },
  ],
} satisfies Meta<typeof XLinkCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "https://x.com/jack/status/1109028973864869888",
  },
};

export const Dark: Story = {
  args: {
    url: "https://x.com/jack/status/1109028973864869888",
    options: {
      theme: "dark",
    },
  },
};

export const ImageHidden: Story = {
  args: {
    url: "https://x.com/jack/status/1109028973864869888",
    options: {
      cards: "hidden",
    },
  },
};

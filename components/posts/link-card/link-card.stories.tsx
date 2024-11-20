import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import LinkCard from ".";

const meta = {
  title: "components/LinkCard",
  component: LinkCard,
} satisfies Meta<typeof LinkCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "https://github.com/khomma0312/my-tech-blog",
    ogpData: {
      title: "my-tech-blog",
      description: "個人ブログのソースコード",
      image:
        "https://opengraph.githubassets.com/11bed71e147b5b0140dfa748d7f38ae5e7b14eafce1f5e414ff49f0ab8ec628c/khomma0312/my-tech-blog",
    },
  },
};

export const NoTitle: Story = {
  args: {
    url: "https://github.com/khomma0312/my-tech-blog",
    ogpData: {
      title: "",
      description: "個人ブログのソースコード",
      image:
        "https://opengraph.githubassets.com/11bed71e147b5b0140dfa748d7f38ae5e7b14eafce1f5e414ff49f0ab8ec628c/khomma0312/my-tech-blog",
    },
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByRole("paragraph").textContent).toEqual(
      "https://github.com/khomma0312/my-tech-blog"
    );
  },
};

export const NoOgpImage: Story = {
  args: {
    url: "https://github.com/khomma0312/my-tech-blog",
    ogpData: {
      title: "my-tech-blog",
      description: "個人ブログのソースコード",
      image: "",
    },
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.queryByAltText("OGP Image")).toBeNull();
  },
};

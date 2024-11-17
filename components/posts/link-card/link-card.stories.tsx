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
    url: "https://github.com/alan2207/bulletproof-react",
    ogpData: {
      title: "bulletproof-react",
      description:
        "🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.  - alan2207/bulletproof-react: 🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",
      image:
        "https://opengraph.githubassets.com/922b2f70400a943a0eaa3bce90da3fefd6554553352962eac2ef90c51a42d154/alan2207/bulletproof-react",
    },
  },
};

export const NoTitle: Story = {
  args: {
    url: "https://github.com/alan2207/bulletproof-react",
    ogpData: {
      title: "",
      description:
        "🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.  - alan2207/bulletproof-react: 🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",
      image:
        "https://opengraph.githubassets.com/922b2f70400a943a0eaa3bce90da3fefd6554553352962eac2ef90c51a42d154/alan2207/bulletproof-react",
    },
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByRole("paragraph").textContent).toEqual(
      "https://github.com/alan2207/bulletproof-react"
    );
  },
};

export const NoOgpImage: Story = {
  args: {
    url: "https://github.com/alan2207/bulletproof-react",
    ogpData: {
      title: "bulletproof-react",
      description:
        "🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.  - alan2207/bulletproof-react: 🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",
      image: "",
    },
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.queryByAltText("OGP Image")).toBeNull();
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import ZennCard from ".";

const meta = {
  title: "components/ZennCard",
  component: ZennCard,
} satisfies Meta<typeof ZennCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: {
      title: "@next/ogでOGP画像を自動生成する機能の実装",
      image:
        "https://res.cloudinary.com/zenn/image/upload/s--Xn4PVXrb--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%2540next%252Fog%25E3%2581%25A7OGP%25E7%2594%25BB%25E5%2583%258F%25E3%2582%2592%25E8%2587%25AA%25E5%258B%2595%25E7%2594%259F%25E6%2588%2590%25E3%2581%2599%25E3%2582%258B%25E6%25A9%259F%25E8%2583%25BD%25E3%2581%25AE%25E5%25AE%259F%25E8%25A3%2585%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:khomma%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzgwMGM1ZmQzZjYuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png",
      url: "https://zenn.dev/khomma/articles/6e7d233bb77154",
    },
  },
};

export const NoImage: Story = {
  args: {
    post: {
      title: "@next/ogでOGP画像を自動生成する機能の実装",
      image: "",
      url: "https://zenn.dev/khomma/articles/6e7d233bb77154",
    },
  },
};

import { composeStories } from "@storybook/react";
import * as Stories from "./youtube-embed.stories";
import { render } from "@testing-library/react";

const { Default } = composeStories(Stories);

describe("components/YouTubeEmbed", () => {
  test("storybook", () => {
    const { container } = render(<Default />);
    Default.play?.({ canvasElement: container });
  });
});

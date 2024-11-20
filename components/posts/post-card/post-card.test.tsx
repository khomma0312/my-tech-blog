import { composeStories } from "@storybook/react";
import * as Stories from "./post-card.stories";
import { render } from "@testing-library/react";

const { Default } = composeStories(Stories);

describe("components/PostCard", () => {
  test("storybook", () => {
    const { container } = render(<Default />);
    Default.play?.({ canvasElement: container });
  });
});

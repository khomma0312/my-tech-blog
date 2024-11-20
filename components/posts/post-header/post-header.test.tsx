import { composeStories } from "@storybook/react";
import * as Stories from "./post-header.stories";
import { render } from "@testing-library/react";

const { Default } = composeStories(Stories);

describe("components/PostFooter", () => {
  test("storybook", () => {
    const { container } = render(<Default />);
    Default.play?.({ canvasElement: container });
  });
});

import { composeStories } from "@storybook/react";
import * as Stories from "./post-body.stories";
import { render } from "@testing-library/react";

const { Default } = composeStories(Stories);

describe("components/PostBody", () => {
  test("storybook", () => {
    const { container } = render(<Default />);
    Default.play?.({ canvasElement: container });
  });
});

import { composeStories } from "@storybook/react";
import * as Stories from "./link-card.stories";
import { render } from "@testing-library/react";

const { Default } = composeStories(Stories);

describe("components/LinkCard", () => {
  test("storybook", () => {
    const { container } = render(<Default />);
    Default.play?.({ canvasElement: container });
  });
});

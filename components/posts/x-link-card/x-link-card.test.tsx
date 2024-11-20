import { composeStories } from "@storybook/react";
import * as Stories from "./x-link-card.stories";
import { render } from "@testing-library/react";

const { Default } = composeStories(Stories);

describe("components/XLinkCard", () => {
  test("storybook", () => {
    const { container } = render(<Default />);
    Default.play?.({ canvasElement: container });
  });
});

import { composeStories } from "@storybook/react";
import * as Stories from "./tag-link.stories";
import { render } from "@testing-library/react";

const { Default } = composeStories(Stories);

describe("components/Divider", () => {
  test("storybook", () => {
    const { container } = render(<Default />);
    Default.play?.({ canvasElement: container });
  });
});

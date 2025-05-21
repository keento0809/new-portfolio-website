import { composeStory } from "@storybook/react";
import * as stories from "./Header.stories";
import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";

const Default = composeStory({}, stories.default);

describe("Header", () => {
  it("should render the header component", async () => {
    await Default.run();

    // Check if the header is rendered
    const header = await screen.findByRole("banner");
    expect(header).toBeInTheDocument();
  });
});

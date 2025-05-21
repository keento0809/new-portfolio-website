import * as stories from "./Header.stories";
import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";

const { Default } = composeStories(stories);

describe("Header", () => {
  it("should render the header component", async () => {
    await Default.run();

    // Check if the header is rendered
    const header = await screen.findByRole("banner");
    expect(header).toBeInTheDocument();
  });
});

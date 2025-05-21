import { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "./HeroSection";

const meta = {
  title: "App/Components/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};

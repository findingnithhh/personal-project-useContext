import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Personal-Project/Atoms/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    a11y: {},
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    type: "error",
    message: "hey there"
  },
};

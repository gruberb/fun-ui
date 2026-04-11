import type { Preview } from "@storybook/react-vite";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "brutal-white",
      values: [
        { name: "brutal-white", value: "#FAFAFA" },
        { name: "brutal-cream", value: "#F5F0E8" },
        { name: "brutal-black", value: "#1A1A1A" },
        { name: "white", value: "#FFFFFF" },
      ],
    },
    layout: "padded",
    a11y: {
      test: "todo",
    },
  },
};

export default preview;

import type { Preview } from "@storybook/react-vite";
import "@fontsource-variable/archivo";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "../src/styles/library.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        paper: { name: "paper", value: "#f3ecdc" },
        raised: { name: "raised", value: "#fdfaf2" },
        ink: { name: "ink", value: "#2a1f33" },
      },
    },
    layout: "padded",
    a11y: {
      test: "todo",
    },
  },
  initialGlobals: {
    backgrounds: { value: "paper" },
  },
};

export default preview;

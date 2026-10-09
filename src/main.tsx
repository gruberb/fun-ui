import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/archivo";
import "@fontsource/ibm-plex-mono/400.css";
import "./styles/library.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ padding: "2rem" }}>
      <h1>fun-ui</h1>
      <p>Run <code>npm run storybook</code> to view the component library.</p>
    </div>
  </StrictMode>,
);

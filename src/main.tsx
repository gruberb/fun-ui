import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ padding: "2rem", fontFamily: "Space Grotesk, sans-serif" }}>
      <h1>fun-ui</h1>
      <p>Run <code>npm run storybook</code> to view the component library.</p>
    </div>
  </StrictMode>,
);

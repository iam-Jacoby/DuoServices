import "./global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("root");

if (rootElement && !rootElement._react_root) {
  const root = createRoot(rootElement);
  (rootElement as any)._react_root = root;
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else if (rootElement && (rootElement as any)._react_root) {
  (rootElement as any)._react_root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

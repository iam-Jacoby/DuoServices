import "./global.css";

import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

declare global {
  interface Window {
    __reactRoot?: Root;
  }
}

if (!window.__reactRoot) {
  window.__reactRoot = createRoot(container);
}

window.__reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);

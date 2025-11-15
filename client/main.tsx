import "./global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

let root: any;

if (!window.__vite_root) {
  root = createRoot(container);
  window.__vite_root = root;
} else {
  root = window.__vite_root;
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

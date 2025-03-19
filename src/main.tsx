import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeTheme } from "@/scripts/themeInit";
import { App } from "@/App";
import "@/index.css";

initializeTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

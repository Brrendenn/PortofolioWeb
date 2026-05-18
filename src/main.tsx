import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
import { AnimatedThemeToggler } from "./components/ui/animated-theme-toggler.tsx";
import SocialSpeedDial from "./components/ui/SocialSpeedDial.tsx";
import SmoothScroll from "./components/ui/SmoothScroll.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <SmoothScroll>
        <div className="fixed top-6 right-6 md:top-8 md:right-8 z-50">
          <AnimatedThemeToggler />
        </div>
        <SocialSpeedDial />
        <App />
      </SmoothScroll>
    </ThemeProvider>
  </StrictMode>,
);

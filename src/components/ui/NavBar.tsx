import { useState } from "react";
import { Check, Computer } from "lucide-react";
import { AnimatedThemeToggler } from "./animated-theme-toggler";

const NavBar = () => {
  const userEmail = "brandon.changg03@gmail.com";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(userEmail)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => console.error("Failed to copy email: ", err));
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-between gap-x-3 bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-full px-4 py-3 shadow-2xl border border-zinc-200 dark:border-zinc-700 z-50">
      <button
        onClick={handleScrollToTop}
        className="flex items-center justify-center h-10 w-10 bg-white dark:bg-zinc-900 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-sm"
        aria-label="Scroll to top"
      >
        <Computer className="h-5 w-5 text-zinc-800 dark:text-zinc-200" />
      </button>
      <button
        onClick={handleCopyEmail}
        className="flex items-center justify-center bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-semibold rounded-full px-5 py-2.5 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
        style={{ minWidth: "160px" }}
      >
        {isCopied ? (
          <span className="flex items-center gap-x-2">
            Copied! <Check className="h-4 w-4" />
          </span>
        ) : (
          <span className="flex items-center gap-x-2">{userEmail}</span>
        )}
      </button>
      <AnimatedThemeToggler />
    </nav>
  );
};

export default NavBar;

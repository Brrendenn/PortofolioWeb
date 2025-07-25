import React, { useState } from "react";
import { Check, Computer } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const NavBar = () => {
  const navLinks = ["About", "Skills", "Projects  "];
  const userEmail = "nbr4nd0n2005@gmail.com";

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
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-between gap-x-3 md:gap-x-6 bg-zinc-600 backdrop-blur-sm text-white rounded-3xl px-3 py-2 shadow-lg ring-1 ring-white/10 via-zinc-500">
      <button
        onClick={handleScrollToTop}
        className="flex items-center justify-center h-10 w-10 bg-white dark:bg-zinc-700 rounded-full transition-transform hover:scale-110 active:scale-95"
        aria-label="Scroll to top"
      >
        <Computer className="h-6 w-6 text-zinc-800" />
      </button>

      <ul className="hidden md:flex items-center gap-x-4">
        {navLinks.map((link) => {
          return (
            <li key={link}>
              <button className="flex items-center w-20 justify-center bg-zinc-500 px-3 py-2 rounded-4xl transition-all duration-200 hover:scale-105 active:scale-95">
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleSmoothScroll((e), link.toLowerCase())}
                  className="font-bold text-sm text-zinc-300 hover:text-white"
                >
                  {link}
                </a>
              </button>
            </li>
          );
        })}
      </ul>

      <button
        onClick={handleCopyEmail}
        className="flex items-center justify-center bg-white dark:bg-zinc-700 text-zinc-600 dark:text-white text-sm font-semibold rounded-2xl px-3 py-2 md:text-sm transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ minWidth: "180px" }}
      >
        {isCopied ? (
          <span className="flex items-center gap-x-2">
            Email copied
            <Check className="h-4 w-4" />
          </span>
        ) : (
          <>
            <span className="hidden md:inline">{userEmail}</span>
            <span className="md:hidden">Email Me</span>
          </>
        )}
      </button>
      <ModeToggle />
    </nav>
  );
};

export default NavBar;

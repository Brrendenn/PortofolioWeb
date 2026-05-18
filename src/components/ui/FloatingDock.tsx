"use client";

import { useState } from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Mail, Check, MonitorUp, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function FloatingDock() {
  const [isCopied, setIsCopied] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("brandon.changg03@gmail.com").then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const dockItems = [
    {
      name: "GitHub",
      icon: (
        <FaGithub className="w-full h-full text-zinc-700 dark:text-zinc-300" />
      ),
      href: "https://github.com/Brrendenn",
      action: null,
    },
    {
      name: "LinkedIn",
      icon: (
        <FaLinkedin className="w-full h-full text-blue-600 dark:text-blue-400" />
      ),
      href: "https://linkedin.com/in/yourprofile",
      action: null,
    },
    {
      name: "Instagram",
      icon: (
        <FaInstagram className="w-full h-full text-pink-600 dark:text-pink-400" />
      ),
      href: "https://instagram.com/yourhandle",
      action: null,
    },
    {
      name: "Divider", // An invisible item just to act as a spacer
      isDivider: true,
    },
    {
      name: isCopied ? "Copied!" : "Email Me",
      icon: isCopied ? (
        <Check className="w-full h-full text-green-500" />
      ) : (
        <Mail className="w-full h-full text-zinc-700 dark:text-zinc-300" />
      ),
      href: null,
      action: handleCopyEmail,
    },
    {
      name: "Toggle Theme",
      icon:
        theme === "dark" ? (
          <Sun className="w-full h-full text-amber-500" />
        ) : (
          <Moon className="w-full h-full text-zinc-700" />
        ),
      href: null,
      action: toggleTheme,
    },
    {
      name: "Back to Top",
      icon: (
        <MonitorUp className="w-full h-full text-zinc-700 dark:text-zinc-300" />
      ),
      href: null,
      action: handleScrollToTop,
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Dock
        iconSize={100}
        iconMagnification={100}
        iconDistance={100}
        className="bg-white/70 dark:bg-zinc-950/70 shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800"
      >
        {dockItems.map((item, index) => {
          if (item.isDivider) {
            return (
              <div
                key={index}
                className="w-[1px] h-8 bg-zinc-300 dark:bg-zinc-700 mx-2"
              />
            );
          }

          const content = (
            <DockIcon
              key={item.name}
              className="relative group bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors shadow-sm"
              onClick={item.action ? item.action : undefined}
            >
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                {item.name}
              </span>
              <div className="w-12 h-full p-2.5 flex items-center justify-center">
                {item.icon}
              </div>
            </DockIcon>
          );

          return item.href ? (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            <button
              key={item.name}
              aria-label={item.name}
              className="outline-none"
            >
              {content}
            </button>
          );
        })}
      </Dock>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import Icon from "./Icon";

export default function ThemeToggle() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      let stored = null;
      try {
        stored = localStorage.getItem("theme");
      } catch {}
      if (!stored) {
        document.documentElement.setAttribute(
          "data-theme",
          e.matches ? "dark" : "light"
        );
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      className="tt"
      id="tt"
      type="button"
      aria-label="تغییر حالت روشن/تاریک"
      title="حالت روشن / تاریک"
      onClick={toggle}
    >
      <Icon name="sun" className="i sun" />
      <Icon name="moon" className="i moon" />
    </button>
  );
}

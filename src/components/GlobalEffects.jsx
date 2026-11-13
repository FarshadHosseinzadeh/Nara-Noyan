"use client";

import { useEffect } from "react";

const SPOT = ".card,.bc,.bp,.ig div,.sv div,.st div";
const TILE = ".info a.row";

function setPos(el, e) {
  const r = el.getBoundingClientRect();
  el.style.setProperty("--x", e.clientX - r.left + "px");
  el.style.setProperty("--y", e.clientY - r.top + "px");
}

export default function GlobalEffects() {
  useEffect(() => {
    // scroll-reveal for every .r element (also elements added later)
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.1 }
    );
    const scan = () =>
      document.querySelectorAll(".r:not(.in)").forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    // card spotlight follows the pointer
    const onMove = (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      const c = t.closest(SPOT);
      if (c) setPos(c, e);
    };

    // contact tiles: hover reveal starts/ends at the cursor position
    const onTile = (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      const a = t.closest(TILE);
      if (!a) return;
      if (e.relatedTarget instanceof Node && a.contains(e.relatedTarget)) return;
      setPos(a, e);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onTile, { passive: true });
    document.addEventListener("pointerout", onTile, { passive: true });
    return () => {
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onTile);
      document.removeEventListener("pointerout", onTile);
    };
  }, []);

  return null;
}

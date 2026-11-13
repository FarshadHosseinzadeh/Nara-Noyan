"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { NAV, SITE } from "@/data/site";

const isActive = (path, href) =>
  href === "/" ? path === "/" : path === href || path.startsWith(href + "/");

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 620) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header ref={ref} className={open ? "menu-open" : undefined}>
      <div className="w mx-auto max-w-[1160px] px-5">
        <button
          className="menu-toggle"
          id="menuToggle"
          type="button"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          aria-controls="siteNav"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Link className="logo" href="/">
          <span className="lg">
            <Image
              src="/images/logo.webp"
              alt="لوگوی نارا نویان (NN.Co)"
              width={300}
              height={115}
              sizes="90px"
              priority
            />
          </span>
          <span className="t">{SITE.name}</span>
        </Link>

        <nav id="siteNav" aria-label="منوی اصلی" onClick={() => setOpen(false)}>
          {NAV.map((n) => {
            const active = isActive(pathname, n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={active ? "on" : undefined}
                aria-current={active ? "page" : undefined}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <ThemeToggle />

        <a
          className="btn wab"
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/images/wa.webp" alt="" width={120} height={120} sizes="32px" />
          واتساپ
        </a>
      </div>
    </header>
  );
}

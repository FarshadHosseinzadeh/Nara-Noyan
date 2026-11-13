"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PRODUCTS } from "@/data/products";

const INTERVAL = 2450;

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % PRODUCTS.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused, i]);

  return (
    <div
      className="stage"
      id="hs"
      onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      {PRODUCTS.map((p, j) => (
        <div key={p.slug} className={"sl" + (j === i ? " on" : "")} aria-hidden={j !== i}>
          <Image
            src={p.image}
            alt={`${p.name} – ${p.type}`}
            width={520}
            height={520}
            sizes="(max-width: 620px) 66vw, 330px"
            priority={j === 0}
          />
          <span className="chip c-a">{p.tags[0]}</span>
          <span className="chip c-b">{p.tags[1]}</span>
          <b className="sn">
            <bdi>{p.name}</bdi>
          </b>
        </div>
      ))}
      <div className="dots">
        {PRODUCTS.map((p, j) => (
          <i
            key={p.slug}
            className={j === i ? "on" : undefined}
            role="button"
            tabIndex={0}
            aria-label={`نمایش ${p.name}`}
            onClick={() => setI(j)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setI(j);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

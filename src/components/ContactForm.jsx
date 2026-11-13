"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { PRODUCTS } from "@/data/products";

const rules = {
  name: (s) => s.trim().length > 2,
  phone: (s) => /^[0-9۰-۹+\s-]{10,15}$/.test(s.trim()),
  message: (s) => s.trim().length > 4,
};

export default function ContactForm() {
  const [v, setV] = useState({ name: "", phone: "", product: "", message: "", hp: "" });
  const [bad, setBad] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("product");
    if (s && PRODUCTS.some((p) => p.slug === s)) setV((x) => ({ ...x, product: s }));
  }, []);

  const set = (k) => (e) => setV((x) => ({ ...x, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    const nb = {
      name: !rules.name(v.name),
      phone: !rules.phone(v.phone),
      message: !rules.message(v.message),
    };
    setBad(nb);
    if (nb.name || nb.phone || nb.message) return;

    setStatus("sending");
    try {
      const product = PRODUCTS.find((p) => p.slug === v.product)?.name || "";
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: v.name.trim(),
          phone: v.phone.trim(),
          product,
          message: v.message.trim(),
          website: v.hp,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="ok" id="ok" style={{ display: "block" }} role="status">
        <div className="ic">
          <Icon name="ck" style={{ width: 30, height: 30 }} />
        </div>
        <h2 style={{ fontSize: 24 }}>ممنون! پیامتان به دستمان رسید</h2>
        <p className="sub" style={{ margin: "auto" }}>
          به‌زودی با شما تماس می‌گیریم.
        </p>
      </div>
    );
  }

  return (
    <form id="fm" noValidate onSubmit={onSubmit}>
      <div className="g2">
        <div className={"f" + (bad.name ? " bad" : "")}>
          <label htmlFor="nm">نام و نام‌خانوادگی</label>
          <input
            id="nm"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            value={v.name}
            onChange={set("name")}
          />
          <span className="er">نام خود را وارد کنید.</span>
        </div>
        <div className={"f" + (bad.phone ? " bad" : "")}>
          <label htmlFor="tl">شماره تماس</label>
          <input
            id="tl"
            name="phone"
            type="tel"
            inputMode="tel"
            dir="ltr"
            style={{ textAlign: "right" }}
            autoComplete="tel"
            placeholder="09xxxxxxxxx"
            maxLength={20}
            value={v.phone}
            onChange={set("phone")}
          />
          <span className="er">شماره معتبر وارد کنید.</span>
        </div>
      </div>
      <div className="f">
        <label htmlFor="pr">محصول مورد نظر</label>
        <select id="pr" name="product" value={v.product} onChange={set("product")}>
          <option value="">هنوز مطمئن نیستم</option>
          {PRODUCTS.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>
      </div>
      <div className={"f" + (bad.message ? " bad" : "")}>
        <label htmlFor="ms">پیام شما</label>
        <textarea
          id="ms"
          name="message"
          maxLength={2000}
          value={v.message}
          onChange={set("message")}
        ></textarea>
        <span className="er">لطفاً پیام خود را بنویسید.</span>
      </div>
      <input
        className="hp"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={v.hp}
        onChange={set("hp")}
      />
      <button
        className="btn"
        type="submit"
        disabled={status === "sending"}
        style={{ width: "100%", justifyContent: "center" }}
      >
        {status === "sending" ? "در حال ارسال…" : "ارسال درخواست"}
      </button>
      {status === "error" && (
        <p
          className="er"
          role="alert"
          style={{ display: "block", textAlign: "center", marginTop: 10 }}
        >
          ارسال پیام انجام نشد. لطفاً از واتساپ یا تماس تلفنی استفاده کنید.
        </p>
      )}
    </form>
  );
}

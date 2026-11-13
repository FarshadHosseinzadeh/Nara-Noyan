import { NextResponse } from "next/server";

export const runtime = "nodejs";

const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  arr.push(now);
  hits.set(ip, arr);
  if (hits.size > 5000) hits.clear();
  return arr.length > 5;
}

const str = (x, max) => (typeof x === "string" ? x.trim().slice(0, max) : "");

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // honeypot: bots fill this hidden field
  if (str(body.website, 200)) return NextResponse.json({ ok: true });

  const name = str(body.name, 100);
  const phone = str(body.phone, 20);
  const product = str(body.product, 100);
  const message = str(body.message, 2000);

  if (name.length < 3 || !/^[0-9۰-۹+\s-]{10,15}$/.test(phone) || message.length < 5) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (limited(ip)) {
    return NextResponse.json({ ok: false, error: "rate" }, { status: 429 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  const text = `📩 پیام جدید از سایت\nنام: ${name}\nتلفن: ${phone}\nمحصول: ${product || "—"}\n\n${message}`;

  if (token && chat) {
    try {
      const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chat, text }),
      });
      if (!r.ok) throw new Error(`telegram ${r.status}`);
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error("contact: telegram delivery failed", err);
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("[contact:dev]", { name, phone, product, message });
    return NextResponse.json({ ok: true });
  }

  console.error("contact: no delivery channel (set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID)");
  return NextResponse.json({ ok: false, error: "not-configured" }, { status: 503 });
}

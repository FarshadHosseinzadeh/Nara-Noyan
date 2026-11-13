import Link from "next/link";
import { NAV } from "@/data/site";

export default function Footer() {
  return (
    <footer>
      <div className="w mx-auto max-w-[1160px] px-5">
        <span className="fl2">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </span>
        <span className="cp">کپی‌رایت ۲۰۲۶ © شرکت بازرگانی نارا نویان</span>
      </div>
    </footer>
  );
}

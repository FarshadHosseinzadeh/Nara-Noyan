import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ p, priority = false }) {
  return (
    <article className="card r">
      <div className="art">
        <Image
          src={p.image}
          alt={`${p.name} – ${p.type}`}
          width={520}
          height={520}
          sizes="(max-width: 620px) 90vw, (max-width: 1200px) 45vw, 520px"
          priority={priority}
        />
      </div>
      <div>
        <span className="tag">{p.type}</span>
        <h3>
          <Link href={`/products/${p.slug}`} className="stretch">
            <bdi>{p.name}</bdi>
          </Link>
        </h3>
        <p>{p.desc}</p>
        <div className="tg">
          {p.tags.map((t) => (
            <i key={t}>{t}</i>
          ))}
        </div>
        <div className="ft">
          <span>جزئیات و گالری ←</span>
          <Link href={`/contact?product=${p.slug}`} className="inq">
            استعلام
          </Link>
        </div>
      </div>
    </article>
  );
}

import { FAQ } from "@/data/faq";

export default function FaqList() {
  return (
    <div className="fq">
      {FAQ.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

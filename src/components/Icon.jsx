export default function Icon({ name, className = "i", style }) {
  return (
    <svg className={className} style={style} aria-hidden="true" focusable="false">
      <use href={`#${name}`} />
    </svg>
  );
}

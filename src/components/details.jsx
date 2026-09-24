import Link from './link';
import { iconFor } from './icon-map';

export default function Details({ data, defaultIconKey = null }) {
  const { title, list } = data;
  if (!list || list.length === 0) return null;
  const fallback = defaultIconKey ? iconFor(defaultIconKey) : null;

  return (
    <section className="details">
      <h3>{title}</h3>
      <ul>
        {list.map(({ icon, text, url }) => (
          <li key={text}>
            {icon ? iconFor(icon) : fallback}
            <span>{url ? <Link to={url}>{text}</Link> : text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Summary({ data }) {
  const { title, text } = data;
  if (!text || !text.trim()) return null;

  return (
    <section className="summary">
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}

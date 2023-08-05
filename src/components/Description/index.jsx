export function Description({label, answer}) {
  return (
    <div className="card-stat">
      <span>{label}</span>
      <span>{answer}</span>
    </div>
  );
}

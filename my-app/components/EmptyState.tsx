type EmptyStateProps = {
  title?: string;
  message?: string;
};

export default function EmptyState({
  title = "No results found",
  message = "There are currently no records available.",
}: EmptyStateProps) {
  return (
    <div className="state-container">
      <div className="state-icon">⌕</div>

      <h2>{title}</h2>

      <p>{message}</p>
    </div>
  );
}
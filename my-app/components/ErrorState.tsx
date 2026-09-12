type ErrorStateProps = {
  message?: string;
  onRetry?: () => void;
};

export default function ErrorState({
  message = "Something went wrong while loading this content.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="state-container">
      <div className="state-icon">!</div>

      <h2>Something went wrong</h2>

      <p>{message}</p>

      {onRetry && (
        <button
          className="retry-button"
          onClick={onRetry}
        >
          Retry
        </button>
      )}
    </div>
  );
}
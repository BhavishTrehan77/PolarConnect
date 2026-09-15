import styles from "./UIStates.module.css";

export default function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load this content. Please try again.",
  onRetry,
}) {
  return (
    <div className={styles.stateContainer}>
      <div className={styles.errorIcon}>!</div>

      <h2>{title}</h2>

      <p>{message}</p>

      {onRetry && (
        <button
          className={styles.stateButton}
          onClick={onRetry}
        >
          Retry
        </button>
      )}
    </div>
  );
}
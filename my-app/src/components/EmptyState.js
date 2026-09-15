import styles from "./UIStates.module.css";

export default function EmptyState({
  title = "No results found",
  message = "Try adjusting your search or filters.",
  buttonText = "Reset filters",
  onAction,
}) {
  return (
    <div className={styles.stateContainer}>
      <div className={styles.stateIcon}>⌕</div>

      <h2>{title}</h2>

      <p>{message}</p>

      {onAction && (
        <button
          className={styles.stateButton}
          onClick={onAction}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
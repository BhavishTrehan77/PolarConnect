import styles from "./UIStates.module.css";

export default function LoadingSkeleton() {
  return (
    <div className={styles.skeletonCard}>
      <div className={`${styles.skeleton} ${styles.skeletonImage}`} />

      <div className={styles.skeletonContent}>
        <div className={`${styles.skeleton} ${styles.skeletonTitle}`} />

        <div className={`${styles.skeleton} ${styles.skeletonText}`} />

        <div
          className={`${styles.skeleton} ${styles.skeletonTextShort}`}
        />
      </div>
    </div>
  );
}
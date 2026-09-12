export default function LoadingSkeleton() {
  return (
    <div className="skeleton-grid">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className="loading-skeleton" key={item}>
          <div className="skeleton-image" />

          <div className="skeleton-content">
            <div className="skeleton-line short" />
            <div className="skeleton-line" />
            <div className="skeleton-line medium" />
            <div className="skeleton-line short" />
          </div>
        </div>
      ))}
    </div>
  );
}
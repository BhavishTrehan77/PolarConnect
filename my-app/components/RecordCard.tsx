import TypeBadge from "./TypeBadge";

type RecordCardProps = {
  title: string;
  description?: string;
  year?: number | string;
  type: string;
  image?: string;
};

export default function RecordCard({
  title,
  description,
  year,
  type,
  image,
}: RecordCardProps) {
  return (
    <article className="record-card">
      {image && (
        <img
          src={image}
          alt={title}
          className="record-card-image"
        />
      )}

      <div className="record-card-content">
        <TypeBadge type={type} />

        <h3 className="record-card-title">
          {title}
        </h3>

        {description && (
          <p className="record-card-description">
            {description}
          </p>
        )}

        {year && (
          <p className="record-card-year">
            {year}
          </p>
        )}
      </div>
    </article>
  );
}
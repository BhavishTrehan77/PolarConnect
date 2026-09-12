type Photo = {
  id: string;
  title: string;
  description: string;
  year: number;
  imageUrl: string;
};

const photos: Photo[] = [
  {
    id: "photo-1",
    title: "Polar Research Expedition",
    description:
      "Researchers conducting scientific observations in the polar region.",
    year: 2026,
    imageUrl:
      "https://images.unsplash.com/photo-1551415923-a2297c7fda79?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "photo-2",
    title: "Antarctic Landscape",
    description:
      "A view of the Antarctic landscape during a research expedition.",
    year: 2026,
    imageUrl:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "photo-3",
    title: "Polar Ice",
    description:
      "Ice formations observed during polar scientific research.",
    year: 2025,
    imageUrl:
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "photo-4",
    title: "Arctic Research",
    description:
      "Researchers documenting environmental conditions in polar regions.",
    year: 2025,
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "photo-5",
    title: "Polar Expedition",
    description:
      "A research team exploring remote polar environments.",
    year: 2024,
    imageUrl:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "photo-6",
    title: "Ocean and Ice",
    description:
      "Polar ocean environments captured during scientific research.",
    year: 2024,
    imageUrl:
      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=900&q=80",
  },
];

export default function GalleryPage() {
  return (
    <main className="page-container">
      <section className="page-header">
        <p className="eyebrow">POLARCONNECT</p>

        <h1>Gallery</h1>

        <p>
          Explore photographs and visual records from polar research,
          expeditions and scientific activities.
        </p>
      </section>

      <section className="gallery-grid">
        {photos.map((photo) => (
          <article className="gallery-card" key={photo.id}>
            <img
              className="gallery-card-image"
              src={photo.imageUrl}
              alt={photo.title}
            />

            <div className="gallery-card-content">
              <span className="type-badge">Photo</span>

              <h2 className="gallery-card-title">
                {photo.title}
              </h2>

              <p className="gallery-card-description">
                {photo.description}
              </p>

              <p className="gallery-card-year">
                {photo.year}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
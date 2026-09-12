import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function GalleryLoading() {
  return (
    <main className="page-container">
      <section className="page-header">
        <p className="eyebrow">POLARCONNECT</p>

        <h1>Gallery</h1>

        <p>
          Loading photographs and visual records...
        </p>
      </section>

      <LoadingSkeleton />
    </main>
  );
}
const methodology = [
  {
    number: "01",
    title: "Collect",
    description:
      "Gather relevant polar science information from trusted sources.",
  },
  {
    number: "02",
    title: "Organize",
    description:
      "Structure information into connected record types and categories.",
  },
  {
    number: "03",
    title: "Discover",
    description:
      "Help users search, filter and explore polar knowledge.",
  },
  {
    number: "04",
    title: "Disseminate",
    description:
      "Present scientific information in an accessible and engaging way.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-container">

      {/* Hero */}

      <section className="about-hero">
        <div className="about-hero-content">
          <p className="eyebrow">POLARCONNECT</p>

          <h1>About PolarConnect</h1>

          <p>
            A knowledge repository and media dissemination platform
            connecting polar research, people, expeditions and
            photographs.
          </p>
        </div>
      </section>


      {/* About sections */}

      <section className="about-section">
        <div className="about-two-column">

          <article className="about-card">
            <h2>About NCPOR</h2>

            <p>
              The National Centre for Polar and Ocean Research
              supports India's polar and ocean research activities.
            </p>

            <p>
              PolarConnect presents polar science information in a
              structured and accessible format so users can discover
              research activities, expeditions and scientific
              contributions.
            </p>
          </article>


          <article className="about-card">
            <h2>About PolarConnect</h2>

            <p>
              PolarConnect is designed as a knowledge repository and
              media dissemination platform for polar science.
            </p>

            <p>
              It connects structured records such as news,
              expeditions, researchers and photographs to create an
              easy-to-use discovery experience.
            </p>
          </article>

        </div>
      </section>


      {/* Methodology */}

      <section className="about-section">

        <h2 className="section-title">
          Our Methodology
        </h2>

        <p className="section-description">
          PolarConnect organizes information into structured record
          types such as News, Expeditions, Researchers and Photos.
          Records can be searched and filtered using relevant
          attributes such as region, theme, year and type.
        </p>


        <div className="methodology-grid">

          {methodology.map((item) => (
            <article
              className="methodology-card"
              key={item.number}
            >
              <div className="methodology-number">
                {item.number}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}

        </div>

      </section>

    </main>
  );
}
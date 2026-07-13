function About() {
  return (
    <section className="page about-page">
      <div className="section-intro">
        <p className="eyebrow">About EcoTrack</p>
        <h1>We help businesses make sustainability simple and effective.</h1>
        <p>
          EcoTrack combines environmental data, smart analytics, and expert
          recommendations to help teams reduce waste, save energy, and improve
          sustainability outcomes.
        </p>
      </div>

      <div className="about-grid">
        <div className="glass-card">
          <h2>Mission</h2>
          <p>
            To empower organizations to measure their environmental footprint
            and turn insights into impact.
          </p>
        </div>

        <div className="glass-card">
          <h2>Vision</h2>
          <p>
            To build a world where every business decision is guided by
            sustainability and data-driven clarity.
          </p>
        </div>

        <div className="glass-card">
          <h2>Values</h2>
          <ul>
            <li>Transparent sustainability tracking.</li>
            <li>Fast, informed energy decisions.</li>
            <li>Tools designed for practical impact.</li>
            <li>Reliable support for every stage of growth.</li>
          </ul>
        </div>

        <div className="glass-card">
          <h2>Approach</h2>
          <p>
            We combine data, automation, and expert guidance to create a
            practical sustainability journey for every organization.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
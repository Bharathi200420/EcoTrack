import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaBolt,
  FaChartLine,
  FaHandsHelping,
  FaShieldAlt,
  FaBell,
  FaUsers,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Sustainable solutions for modern businesses</p>
          <h1>Transform your environmental impact with EcoTrack</h1>
          <p>
            A modern platform built to help companies measure, optimize, and
            communicate sustainability performance with clarity and style.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/services">
              Explore Services
            </Link>
            <Link className="btn btn-secondary" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="hero-illustration" aria-hidden="true">
          <div className="hero-card">
            <p className="eyebrow">Live insight</p>
            <h4>Real-time emissions dashboard</h4>
            <div className="hero-chart">
              <span className="chart-dot">•</span>
              <div className="chart-bars">
                <span className="bar tall"></span>
                <span className="bar medium"></span>
                <span className="bar short"></span>
              </div>
            </div>
            <div className="hero-chip">+32% efficiency</div>
          </div>
          <span className="floating-circle"></span>
          <span className="floating-ring"></span>
        </div>
      </section>

      <section className="welcome">
        <div className="section-intro">
          <p className="eyebrow">Why EcoTrack</p>
          <h2>Smart tracking. Better decisions. Real sustainability.</h2>
          <p>
            We help teams reduce carbon, cut energy waste, and build stronger
            ESG reports with a clean, professional interface.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <span>97%</span>
            <p>Customer satisfaction across sustainability programs.</p>
          </div>
          <div className="stat-card">
            <span>180+</span>
            <p>Organizations supported with measurable efficiency gains.</p>
          </div>
          <div className="stat-card">
            <span>24/7</span>
            <p>Data monitoring and insights available around the clock.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-intro">
          <p className="eyebrow">What we offer</p>
          <h2>Seven features designed for modern sustainability.</h2>
        </div>

        <div className="features-grid">
          <FeatureCard
            icon={<FaLeaf />}
            title="Carbon Tracking"
            description="Monitor emissions in real time and identify reduction opportunities."
          />
          <FeatureCard
            icon={<FaBolt />}
            title="Energy Analytics"
            description="Analyze usage patterns to reduce waste and cost."
          />
          <FeatureCard
            icon={<FaChartLine />}
            title="Sustainability Reporting"
            description="Build clean, stakeholder-ready reports with ease."
          />
          <FeatureCard
            icon={<FaHandsHelping />}
            title="Impact Coaching"
            description="Get expert guidance to turn sustainability data into action."
          />
        </div>

        <div className="feature-boost">
          <FeatureCard
            icon={<FaShieldAlt />}
            title="Secure Data"
            description="Protect your sustainability metrics with enterprise-grade security."
          />
          <FeatureCard
            icon={<FaBell />}
            title="Smart Alerts"
            description="Receive proactive notifications when your key metrics change."
          />
          <FeatureCard
            icon={<FaUsers />}
            title="Team Collaboration"
            description="Share insights across teams and coordinate sustainability goals."
          />
        </div>
      </section>

      <section className="testimonials">
        <div className="section-intro">
          <p className="eyebrow">Testimonials</p>
          <h2>Trusted by teams building a greener future.</h2>
          <p>
            See what operations leaders and sustainability managers say about EcoTrack.
          </p>
        </div>

        <div className="testimonial-grid">
          <article className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>
              EcoTrack gave our team total visibility into energy use and helped us
              reduce operational costs by 18% in three months.
            </p>
            <div className="testimonial-meta">
              <h4>Sena</h4>
              <span>Operations Lead, GreenWave</span>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </article>

          <article className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>
              The dashboard is beautiful and the alerts keep our team one step ahead of
              compliance issues.
            </p>
            <div className="testimonial-meta">
              <h4>Achsha</h4>
              <span>Facility Manager, TerraNova</span>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </article>

          <article className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>
              Our reporting process became much smoother and our leaders now trust the
              data every month.
            </p>
            <div className="testimonial-meta">
              <h4>Aarthi</h4>
              <span>Sustainability Head, EcoPulse</span>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Home;
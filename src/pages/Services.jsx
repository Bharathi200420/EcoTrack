import {
  FaLeaf,
  FaBolt,
  FaRecycle,
  FaChartLine,
} from "react-icons/fa";

import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <section className="page services-page">
      <div className="section-intro">
        <p className="eyebrow">Our Services</p>
        <h1>Four key service areas to elevate sustainability.</h1>
        <p>
          Each service is designed to provide real visibility and measurable
          improvements for your business operations.
        </p>
      </div>

      <div className="service-highlights">
        <div className="glass-card">
          <h3>Custom sustainability roadmaps</h3>
          <p>We build a tailored plan that matches your business goals and resource needs.</p>
        </div>
        <div className="glass-card">
          <h3>Fast onboarding</h3>
          <p>Get started quickly with easy data setup, clear guidance, and immediate insights.</p>
        </div>
        <div className="glass-card">
          <h3>Ongoing support</h3>
          <p>Our team is available to help you interpret results and optimize your next steps.</p>
        </div>
      </div>

      <div className="service-grid">
        <ServiceCard
          icon={<FaLeaf />}
          title="Carbon Footprint Analysis"
          description="Measure emissions across operations and identify reduction goals."
        />

        <ServiceCard
          icon={<FaBolt />}
          title="Energy Consumption Monitoring"
          description="Analyze usage and reduce costs with smart analytics."
        />

        <ServiceCard
          icon={<FaRecycle />}
          title="Waste Management Tracking"
          description="Track waste streams and improve recycling performance."
        />

        <ServiceCard
          icon={<FaChartLine />}
          title="Sustainability Consulting"
          description="Receive expert guidance for green strategy and reporting."
        />
      </div>
    </section>
  );
}

export default Services;
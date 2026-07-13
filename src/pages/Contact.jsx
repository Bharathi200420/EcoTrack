function Contact() {
  return (
    <section className="page contact-page">
      <div className="section-intro">
        <p className="eyebrow">Get in touch</p>
        <h1>Ready to start your sustainability journey?</h1>
        <p>
          Send us a message and we’ll help you discover the right services to
          improve your environmental performance.
        </p>
      </div>

      <div className="contact-layout">
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea rows="5" placeholder="Message" required></textarea>
          <button type="submit">Submit</button>
          <p className="form-note">We typically reply within 24 hours on business days.</p>
        </form>

        <aside className="address-card">
          <h3>Contact Details</h3>
          <p>EcoTrack Sustainability Solutions</p>
          <p>Chennai, Tamil Nadu, India</p>
          <p>Email: contact@ecotrack.com</p>
          <p>Phone: +91 98765 43210</p>

          <div className="contact-meta">
            <div>
              <h4>Office Hours</h4>
              <p>Mon - Fri: 9am to 6pm</p>
            </div>
            <div>
              <h4>Support</h4>
              <p>Live chat and email support available.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
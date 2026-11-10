import JSZip from 'jszip';

export async function generateNetlifyZip(): Promise<void> {
  const zip = new JSZip();

  // Standalone HTML file with complete styling and scripts for Netlify hosting
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BREEZY TECH | Professional AC Services in Tiruppur</title>
  <meta name="description" content="Not Just Service. Complete AC Care. Expert AC installation, repair, deep jet cleaning, and gas charging all over Tiruppur, Tamil Nadu. Call +91 91235 28287." />
  
  <!-- OpenGraph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="BREEZY TECH | Professional AC Services in Tiruppur" />
  <meta property="og:description" content="Not Just Service. Complete AC Care. Doorstep AC services within 90 mins in Tiruppur." />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- FontAwesome for icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body class="dark-theme">

  <!-- Top Navigation -->
  <header class="site-header">
    <div class="header-container">
      <a href="#" class="brand-logo">
        <span class="brand-icon"><i class="fa-solid fa-snowflake"></i></span>
        <span class="brand-text">BREEZY TECH</span>
      </a>

      <nav class="nav-menu" id="navMenu">
        <a href="#services" class="nav-link">Services</a>
        <a href="#why-us" class="nav-link">Why Us</a>
        <a href="#gallery" class="nav-link">Our Work</a>
        <a href="#reviews" class="nav-link">Reviews</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>

      <div class="header-actions">
        <button id="langToggleBtn" class="lang-btn" onclick="toggleLanguage()">
          <span class="lang-badge">தமிழ்</span>
        </button>
        <a href="tel:+919123528287" class="btn btn-call">
          <i class="fa-solid fa-phone"></i>
          <span>+91 91235 28287</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="hero-kicker">
          <span class="pulse-dot"></span>
          <span id="txt-location">All Over Tiruppur, Tamil Nadu</span>
        </div>
        <h1 class="hero-headline" id="txt-headline">Your AC Deserves Professional Care.</h1>
        <p class="hero-subtitle" id="txt-subtitle">Not Just Service. Complete AC Care.</p>
        <p class="hero-desc" id="txt-desc">
          Tiruppur’s premier AC care specialist. Deep jet-pressure cleaning, precision gas charging, and master diagnostics delivered right to your doorstep within 90 minutes.
        </p>
        <div class="hero-cta-group">
          <a href="tel:+919123528287" class="btn btn-primary" id="btn-call">
            <i class="fa-solid fa-phone-volume"></i>
            <span>Call Now: 91235 28287</span>
          </a>
          <a href="https://wa.me/919123528287?text=Hello%20Breezy%20Tech!%20I%20want%20to%20book%20AC%20service%20in%20Tiruppur." target="_blank" class="btn btn-whatsapp" id="btn-whatsapp">
            <i class="fa-brands fa-whatsapp"></i>
            <span>WhatsApp Chat</span>
          </a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="ac-glow-card">
          <div class="ac-badge">16°C TURBO COOL ACTIVE</div>
          <div class="ac-airflow-streams">
            <div class="stream stream-1"></div>
            <div class="stream stream-2"></div>
            <div class="stream stream-3"></div>
          </div>
          <div class="ac-stats">
            <div class="stat-box">
              <span class="stat-val">90 Mins</span>
              <span class="stat-lbl">Tiruppur Doorstep</span>
            </div>
            <div class="stat-box">
              <span class="stat-val">4.9 ★</span>
              <span class="stat-lbl">180+ Google Reviews</span>
            </div>
            <div class="stat-box">
              <span class="stat-val">30 Days</span>
              <span class="stat-lbl">Cooling Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="section" id="services">
    <div class="container">
      <div class="section-header">
        <span class="section-kicker">PRECISION AIR CARE</span>
        <h2 class="section-title" id="txt-services-title">Our Professional Services</h2>
        <p class="section-subtitle">Complete cooling solutions for homes, textile mills, and commercial spaces across Tiruppur.</p>
      </div>

      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon"><i class="fa-solid fa-screwdriver-wrench"></i></div>
          <h3>AC Installation</h3>
          <p>Laser-leveled indoor unit fitting, anti-vibration outdoor mounting, and precision copper flare piping.</p>
          <div class="service-price">Starts ₹999</div>
          <a href="https://wa.me/919123528287?text=Hi%20Breezy%20Tech,%20I%20need%20AC%20Installation" class="btn-service">Book Service</a>
        </div>

        <div class="service-card featured">
          <div class="service-icon"><i class="fa-solid fa-spray-can-sparkles"></i></div>
          <h3>AC Deep Cleaning</h3>
          <p>120-bar water jet pump foam wash for cooling coil, blower fan, and anti-bacterial sanitization.</p>
          <div class="service-price">Starts ₹599</div>
          <a href="https://wa.me/919123528287?text=Hi%20Breezy%20Tech,%20I%20need%20AC%20Deep%20Cleaning" class="btn-service">Book Service</a>
        </div>

        <div class="service-card">
          <div class="service-icon"><i class="fa-solid fa-gauge-high"></i></div>
          <h3>AC Gas Filling</h3>
          <p>Genuine R32, R410A, and R22 refrigerant charging with nitrogen leak test and vacuum pump evacuation.</p>
          <div class="service-price">Starts ₹1,499</div>
          <a href="https://wa.me/919123528287?text=Hi%20Breezy%20Tech,%20I%20need%20AC%20Gas%20Refill" class="btn-service">Book Service</a>
        </div>

        <div class="service-card">
          <div class="service-icon"><i class="fa-solid fa-microchip"></i></div>
          <h3>AC Repair & PCB</h3>
          <p>Master troubleshooting for inverter PCB boards, compressors, sensor errors, and motor replacements.</p>
          <div class="service-price">Starts ₹349</div>
          <a href="https://wa.me/919123528287?text=Hi%20Breezy%20Tech,%20I%20need%20AC%20Repair" class="btn-service">Book Service</a>
        </div>

        <div class="service-card">
          <div class="service-icon"><i class="fa-solid fa-wind"></i></div>
          <h3>Split AC Service</h3>
          <p>Routine 18-point cooling inspection, electrical current testing, and airflow optimization.</p>
          <div class="service-price">Starts ₹449</div>
          <a href="https://wa.me/919123528287?text=Hi%20Breezy%20Tech,%20I%20need%20Split%20AC%20Service" class="btn-service">Book Service</a>
        </div>

        <div class="service-card">
          <div class="service-icon"><i class="fa-solid fa-border-all"></i></div>
          <h3>Window AC Service</h3>
          <p>Complete chassis pull-out chemical jet wash, chassis rust proofing, and fan bearing lubrication.</p>
          <div class="service-price">Starts ₹499</div>
          <a href="https://wa.me/919123528287?text=Hi%20Breezy%20Tech,%20I%20need%20Window%20AC%20Service" class="btn-service">Book Service</a>
        </div>

        <div class="service-card">
          <div class="service-icon"><i class="fa-solid fa-building"></i></div>
          <h3>Cassette AC Service</h3>
          <p>Commercial 4-way ceiling cassette overhaul for textile showrooms, corporate offices, and factories.</p>
          <div class="service-price">Starts ₹1,199</div>
          <a href="https://wa.me/919123528287?text=Hi%20Breezy%20Tech,%20I%20need%20Cassette%20AC%20Service" class="btn-service">Book Service</a>
        </div>

        <div class="service-card">
          <div class="service-icon"><i class="fa-solid fa-shield-halved"></i></div>
          <h3>AC Maintenance (AMC)</h3>
          <p>Year-round planned maintenance with 3 scheduled jet washes, free breakdown calls, and priority visits.</p>
          <div class="service-price">Starts ₹1,899/yr</div>
          <a href="https://wa.me/919123528287?text=Hi%20Breezy%20Tech,%20I%20need%20AMC%20Plan" class="btn-service">Book Service</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="section bg-darker" id="why-us">
    <div class="container">
      <div class="section-header">
        <span class="section-kicker">WHY CHOOSE US</span>
        <h2 class="section-title">The Breezy Tech Difference</h2>
        <p class="section-subtitle">Engineered for superior cooling, pure indoor air, and transparent service across Tiruppur.</p>
      </div>

      <div class="pillars-grid">
        <div class="pillar-card">
          <h4>Professional AC Care</h4>
          <p>Specialized high-pressure jet pumps, protective indoor wall jackets, and digital vacuum gauges.</p>
        </div>
        <div class="pillar-card">
          <h4>Reliable Service</h4>
          <p>Guaranteed doorstep arrival within 90 minutes anywhere across Tiruppur’s residential and industrial belts.</p>
        </div>
        <div class="pillar-card">
          <h4>Customer Satisfaction</h4>
          <p>Itemized upfront quotes, zero surprise charges, and our 30-day post-service cooling performance warranty.</p>
        </div>
        <div class="pillar-card">
          <h4>Expert Technicians</h4>
          <p>Certified engineers with 10+ years hands-on experience across Daikin, Voltas, Blue Star, LG, and Carrier.</p>
        </div>
        <div class="pillar-card full-width">
          <h4>All Over Tiruppur</h4>
          <p>Dedicated mobile vans servicing Avinashi Rd, Palladam Rd, Dharapuram Rd, Kangeyam Rd, Perumanallur, Rayapuram, and Gandhi Nagar.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Google Reviews -->
  <section class="section" id="reviews">
    <div class="container">
      <div class="section-header">
        <span class="section-kicker">REAL FEEDBACK</span>
        <h2 class="section-title">Genuine Google Customer Reviews</h2>
        <p class="section-subtitle">Verified ratings from homeowners and businesses across Tiruppur.</p>
      </div>

      <div class="reviews-grid">
        <div class="review-card">
          <div class="review-stars">★★★★★</div>
          <p class="review-text">"Outstanding service! Called at 10 AM, technician arrived in Avinashi Road within 45 mins. Fixed capacitor and minor gas leak. Super icy cooling restored!"</p>
          <div class="review-author">K. Senthil Kumar · Avinashi Road, Tiruppur</div>
        </div>

        <div class="review-card">
          <div class="review-stars">★★★★★</div>
          <p class="review-text">"Booked Jet Pump deep cleaning. They used a protective jacket, not a single drop stained our painted walls. The airflow is strong and smells totally fresh."</p>
          <div class="review-author">Priya Natarajan · Gandhi Nagar, Tiruppur</div>
        </div>

        <div class="review-card">
          <div class="review-stars">★★★★★</div>
          <p class="review-text">"We have 6 cassette ACs in our garment showroom on Palladam Road. Breezy Tech fixed continuous water dripping and did complete servicing. Very professional."</p>
          <div class="review-author">R. Karthikeyan · Palladam Road Textile Hub</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="section bg-darker" id="contact">
    <div class="container contact-grid">
      <div class="contact-info">
        <span class="section-kicker">INSTANT CONTACT</span>
        <h2 class="section-title">Reach Breezy Tech</h2>
        <p>Doorstep service available all 7 days from 8:00 AM to 9:00 PM.</p>

        <div class="contact-details">
          <div class="contact-item">
            <i class="fa-solid fa-phone"></i>
            <div>
              <strong>Phone Call:</strong>
              <a href="tel:+919123528287">+91 91235 28287</a>
            </div>
          </div>
          <div class="contact-item">
            <i class="fa-brands fa-whatsapp"></i>
            <div>
              <strong>WhatsApp Direct:</strong>
              <a href="https://wa.me/919123528287?text=Hello%20Breezy%20Tech" target="_blank">+91 91235 28287</a>
            </div>
          </div>
          <div class="contact-item">
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <strong>Service Coverage:</strong>
              <span>All Over Tiruppur, Tamil Nadu (641601 - 641608)</span>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-card">
        <h3>Book Doorstep Service</h3>
        <p>Send a message on WhatsApp for instant 90-minute technician dispatch.</p>
        <a href="https://wa.me/919123528287?text=Hi%20Breezy%20Tech!%20I%20need%20AC%20Service%20in%20Tiruppur." target="_blank" class="btn btn-whatsapp-large">
          <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp Now
        </a>
        <a href="tel:+919123528287" class="btn btn-call-large">
          <i class="fa-solid fa-phone"></i> Call +91 91235 28287
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container footer-content">
      <div class="footer-brand">
        <span class="brand-text">BREEZY TECH</span>
        <p>NOT JUST SERVICE. COMPLETE AC CARE.</p>
        <p class="footer-area">Serving All Over Tiruppur, Tamil Nadu · Call +91 91235 28287</p>
      </div>
      <div class="footer-bottom">
        <p>© 2026 BREEZY TECH. All Rights Reserved.</p>
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp Action -->
  <a href="https://wa.me/919123528287?text=Hello%20Breezy%20Tech!%20I%20want%20to%20book%20AC%20service%20in%20Tiruppur." class="floating-wa" target="_blank" aria-label="Chat on WhatsApp">
    <i class="fa-brands fa-whatsapp"></i>
  </a>

  <script src="script.js"></script>
</body>
</html>`;

  const cssContent = `/* BREEZY TECH - Premium Dark 3D Stylesheet */
:root {
  --bg-primary: #030712;
  --bg-secondary: #0b1528;
  --bg-card: rgba(15, 23, 42, 0.85);
  --ice-blue: #38bdf8;
  --ice-cyan: #00f0ff;
  --navy-dark: #071224;
  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  --border-ice: rgba(56, 189, 248, 0.25);
  --border-subtle: rgba(148, 163, 184, 0.15);
  --font-display: 'Outfit', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  background-color: var(--bg-primary);
  color: var(--text-main);
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(3, 7, 18, 0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-subtle);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #fff;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.brand-icon {
  color: var(--ice-cyan);
  text-shadow: 0 0 12px var(--ice-cyan);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.nav-link {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--ice-blue);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.lang-btn {
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid var(--border-ice);
  color: var(--ice-blue);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.lang-btn:hover {
  background: rgba(56, 189, 248, 0.2);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-call {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid var(--border-ice);
  color: #fff;
}

.btn-call:hover {
  border-color: var(--ice-blue);
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
}

.btn-primary {
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.5);
}

.btn-whatsapp {
  background: #15803d;
  color: #fff;
}

.btn-whatsapp:hover {
  background: #16a34a;
}

/* Hero */
.hero-section {
  padding: 5rem 0 4rem;
  background: radial-gradient(circle at 70% 30%, rgba(14, 165, 233, 0.12) 0%, transparent 60%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3.5rem;
  align-items: center;
}

.hero-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--ice-blue);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--ice-cyan);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--ice-cyan);
}

.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 4.5vw, 3.75rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: #fff;
  margin-bottom: 0.75rem;
}

.hero-subtitle {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--ice-blue);
  margin-bottom: 1.25rem;
}

.hero-desc {
  font-size: 1.05rem;
  color: var(--text-muted);
  max-width: 540px;
  margin-bottom: 2rem;
}

.hero-cta-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* 3D AC Visual Card */
.ac-glow-card {
  position: relative;
  background: linear-gradient(145deg, #0b1528 0%, #040914 100%);
  border: 1px solid var(--border-ice);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.8), 0 0 35px rgba(56, 189, 248, 0.15);
  overflow: hidden;
}

.ac-badge {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--ice-cyan);
  margin-bottom: 1.5rem;
}

.ac-airflow-streams {
  height: 140px;
  position: relative;
  margin-bottom: 1.5rem;
  background: radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.25) 0%, transparent 75%);
  border-radius: 8px;
}

.stream {
  position: absolute;
  top: 10px;
  width: 4px;
  height: 90px;
  background: linear-gradient(to bottom, rgba(56, 189, 248, 0.8), transparent);
  filter: blur(1px);
}

.stream-1 { left: 30%; animation: flow 2s infinite ease-in; }
.stream-2 { left: 50%; animation: flow 2.5s infinite ease-in 0.3s; }
.stream-3 { left: 70%; animation: flow 2.2s infinite ease-in 0.6s; }

@keyframes flow {
  0% { transform: translateY(-10px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(80px); opacity: 0; }
}

.ac-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  border-top: 1px solid var(--border-subtle);
  padding-top: 1.5rem;
}

.stat-box {
  text-align: center;
}

.stat-val {
  display: block;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
}

.stat-lbl {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* Sections */
.section {
  padding: 5rem 0;
}

.bg-darker {
  background-color: #02050c;
}

.section-header {
  text-align: center;
  max-width: 650px;
  margin: 0 auto 3.5rem;
}

.section-kicker {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--ice-blue);
  text-transform: uppercase;
}

.section-title {
  font-family: var(--font-display);
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #fff;
  margin: 0.5rem 0;
}

.section-subtitle {
  color: var(--text-muted);
  font-size: 0.95rem;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.service-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-ice);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.15);
}

.service-card.featured {
  border-color: var(--border-ice);
  background: linear-gradient(145deg, rgba(14, 165, 233, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%);
}

.service-icon {
  font-size: 1.5rem;
  color: var(--ice-blue);
  margin-bottom: 1rem;
}

.service-card h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.service-card p {
  font-size: 0.85rem;
  color: var(--text-muted);
  flex-grow: 1;
  margin-bottom: 1.25rem;
}

.service-price {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--ice-cyan);
  margin-bottom: 1rem;
}

.btn-service {
  display: inline-block;
  text-align: center;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid var(--border-ice);
  color: #fff;
  padding: 0.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.8125rem;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-service:hover {
  background: var(--ice-blue);
  color: #030712;
}

/* Pillars */
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.pillar-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 2rem;
}

.pillar-card.full-width {
  grid-column: span 2;
}

.pillar-card h4 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.pillar-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* Reviews */
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.review-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1.75rem;
}

.review-stars {
  color: #f59e0b;
  margin-bottom: 0.75rem;
}

.review-text {
  font-size: 0.9rem;
  color: #e2e8f0;
  font-style: italic;
  margin-bottom: 1rem;
}

.review-author {
  font-size: 0.8rem;
  color: var(--ice-blue);
  font-weight: 600;
}

/* Contact */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.contact-details {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.contact-item i {
  font-size: 1.25rem;
  color: var(--ice-blue);
}

.contact-item a {
  color: #fff;
  text-decoration: none;
}

.contact-card {
  background: var(--bg-card);
  border: 1px solid var(--border-ice);
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
}

.contact-card h3 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.contact-card p {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.btn-whatsapp-large {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  background: #16a34a;
  color: #fff;
  padding: 0.875rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.btn-call-large {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid var(--border-ice);
  color: #fff;
  padding: 0.875rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
}

/* Footer */
.site-footer {
  border-top: 1px solid var(--border-subtle);
  padding: 3rem 0;
  background-color: #020409;
}

.footer-content {
  text-align: center;
}

.footer-brand .brand-text {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
}

.footer-brand p {
  color: var(--text-muted);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.footer-bottom {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.8rem;
  color: #64748b;
}

/* Floating WhatsApp */
.floating-wa {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.75rem;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  z-index: 999;
  transition: transform 0.2s;
}

.floating-wa:hover {
  transform: scale(1.1);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-grid, .contact-grid, .pillars-grid {
    grid-template-columns: 1fr;
  }
  .pillar-card.full-width {
    grid-column: span 1;
  }
  .nav-menu {
    display: none;
  }
}
`;

  const jsContent = `/* BREEZY TECH - Standalone JavaScript */
let currentLang = 'en';

const langData = {
  en: {
    headline: "Your AC Deserves Professional Care.",
    subtitle: "Not Just Service. Complete AC Care.",
    location: "All Over Tiruppur, Tamil Nadu",
    desc: "Tiruppur’s premier AC care specialist. Deep jet-pressure cleaning, precision gas charging, and master diagnostics delivered right to your doorstep within 90 minutes.",
    servicesTitle: "Our Professional Services",
    callBtn: "Call Now: 91235 28287",
    badge: "தமிழ்"
  },
  ta: {
    headline: "உங்கள் ஏசிக்கு தொழில்முறை பராமரிப்பு தேவை.",
    subtitle: "வெறும் சர்வீஸ் அல்ல. முழுமையான ஏசி பராமரிப்பு.",
    location: "திருப்பூர் முழுவதும், தமிழ்நாடு",
    desc: "திருப்பூரின் முன்னணி ஏசி பழுதுநீக்குதல் & சர்வீஸ் மையம். ஜெட் பம்ப் ஆழமான வாஷ், அசல் கேஸ் நிரப்புதல், மற்றும் அவசர பழுதுநீக்குதல்—திருப்பூர் முழுவதும் 90 நிமிடங்களில் உங்கள் இல்லத்திற்கே வருகிறோம்.",
    servicesTitle: "எங்கள் ஏசி சேவைகள்",
    callBtn: "அழைக்க: 91235 28287",
    badge: "English"
  }
};

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ta' : 'en';
  const data = langData[currentLang];
  
  document.getElementById('txt-headline').innerText = data.headline;
  document.getElementById('txt-subtitle').innerText = data.subtitle;
  document.getElementById('txt-location').innerText = data.location;
  document.getElementById('txt-desc').innerText = data.desc;
  document.getElementById('txt-services-title').innerText = data.servicesTitle;
  document.querySelector('#btn-call span').innerText = data.callBtn;
  document.querySelector('#langToggleBtn span').innerText = data.badge;
  
  if (currentLang === 'ta') {
    document.body.classList.add('tamil-font');
  } else {
    document.body.classList.remove('tamil-font');
  }
}

console.log('BREEZY TECH static website ready for Netlify.');
`;

  const redirectsContent = `/*    /index.html   200\n`;
  const readmeContent = `# BREEZY TECH - Netlify Deployment Bundle

This folder contains the complete, standalone static website for BREEZY TECH Air Conditioning Services in Tiruppur.

## Files Included:
- **index.html**: Complete responsive HTML5 with SEO meta tags, Google reviews, service cards, and language switcher.
- **style.css**: Dark 3D theme with ice-blue neon glow, responsive grids, and typography.
- **script.js**: Client-side interactive language switcher (English / Tamil) and actions.
- **_redirects**: Netlify SPA rewrite rule.

## How to Host on Netlify:
1. Log into your [Netlify](https://app.netlify.com) dashboard.
2. Drag and drop this extracted folder onto the Netlify "Deploy manually" area.
3. Your website is instantly live with SSL!
`;

  zip.file('index.html', htmlContent);
  zip.file('style.css', cssContent);
  zip.file('script.js', jsContent);
  zip.file('_redirects', redirectsContent);
  zip.file('README.md', readmeContent);

  const content = await zip.generateAsync({ type: 'blob' });
  const downloadUrl = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = 'breezy-tech-tiruppur-netlify.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(downloadUrl);
}

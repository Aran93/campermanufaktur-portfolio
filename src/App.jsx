import { useState } from 'react'
import './App.css'

function App() {
  const [aktuelleSeite, setAktuelleSeite] = useState('home')
  
  // Gallery Slider State
  const [isSliderOpen, setIsSliderOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryImages = [
    '/image/slider1.png',
    '/image/slider2.png',
    '/image/slider3.png',
    '/image/slider4.png',
    '/image/slider5.png',
    '/image/slider6.png'
  ]

  const openSlider = (index) => {
    setCurrentImageIndex(index)
    setIsSliderOpen(true)
  }

  const closeSlider = () => {
    setIsSliderOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="app">
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="logo" onClick={() => setAktuelleSeite('home')}>
          <img src="/image/LOGO.webp" alt="Campermanufaktur Logo" className="logo-img" />
        </div>
        <div className="nav-links">
          <a href="#home" onClick={() => setAktuelleSeite('home')}>Home</a>
          <a href="#about" onClick={() => setAktuelleSeite('home')}>Über uns</a>
          <a href="#services" onClick={() => setAktuelleSeite('home')}>Leistungen</a>
          <a href="#contact" onClick={() => setAktuelleSeite('home')}>Kontakt</a>
        </div>
        <button className="cart-btn" onClick={() => setAktuelleSeite('shop')}>ZUM SHOP</button>
      </nav>

      {aktuelleSeite === 'home' && (
        <>
                    {/* 1. HERO SECTION MIT ANIMATIONEN */}
          <header className="hero-section">
            {/* Das Bild wird jetzt über CSS ::before animiert (Ken Burns) */}
            <div className="hero-overlay"></div>
            
            <div className="hero-content">
              <h1 className="hero-line-1 fade-in">BAUE DIR DEINEN TRAUM</h1>
              <h1 className="hero-line-2 highlight fade-in delay-1">INDIVIDUELLE CAMPERMODULE</h1>
              <h1 className="hero-line-3 fade-in delay-2">HANDGEMACHT IN BERLIN</h1>
              <p className="hero-subtext fade-in delay-3">
                Ausgezeichnet mit dem VanBuilder Award 2025. Über 17 Module, die sich perfekt kombinieren lassen. 
                Wir liefern dir die Freiheit, dein Zuhause auf Rädern selbst zu gestalten.
              </p>
              <div className="hero-buttons fade-in delay-4">
                <button onClick={() => setAktuelleSeite('shop')} className="btn-primary">MODULE ENTDECKEN</button>
                <button className="btn-secondary">KONTAKT AUFNEHMEN</button>
              </div>
            </div>

            {/* Scroll Indicator (Die animierte Maus unten) */}
            <div className="scroll-indicator fade-in delay-5">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
            </div>
          </header>

          {/* 2. ÜBER UNS SECTION */}
          <section id="about" className="about-section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">ÜBER UNS</span>
                <h2>Ein wenig über die Campermanufaktur</h2>
              </div>
              <div className="about-text">
                <p>
                  Wir sind ein Berliner Unternehmen, spezialisiert auf den individuellen Wohnmobilausbau. 
                  Seit über 5 Jahren entwickeln, bauen und testen wir Module, die Technik, Stauraum und Wohnkomfort 
                  intelligent verbinden. Jedes Modul wird in unserer Manufaktur nördlich von Berlin in reiner Handarbeit gefertigt.
                </p>
                <p>
                  Als Maßstab setzen wir uns keine Industriestandards, sondern liefern dir eine perfekt auf deine 
                  Wünsche zugeschnittene Lösung. Über 80.000 Arbeitsstunden und zahlreiche realisierte Fahrzeuge 
                  stecken in jedem unserer Produkte.
                </p>
              </div>
            </div>
          </section>

          {/* 2.5. FOTO GALERIE MIT SLIDER */}
          <section className="gallery-section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">EINBLICKE</span>
                <h2>Unsere Arbeit in Bildern</h2>
              </div>
              
              <div className="gallery-grid">
                {galleryImages.slice(0, 4).map((bild, index) => (
                  <div key={index} className="gallery-item" onClick={() => openSlider(index)}>
                    <img src={bild} alt={`Galerie ${index + 1}`} />
                    <div className="gallery-overlay">
                      <span className="zoom-icon">🔍</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* LIGHTBOX SLIDER */}
          {isSliderOpen && (
            <div className="lightbox">
              <div className="lightbox-content">
                <button className="lightbox-close" onClick={closeSlider}>✕</button>
                <button className="lightbox-arrow left" onClick={prevImage}>❮</button>
                
                <img src={galleryImages[currentImageIndex]} alt={`Slider ${currentImageIndex + 1}`} />
                
                <button className="lightbox-arrow right" onClick={nextImage}>❯</button>
                
                <div className="lightbox-dots">
                  {galleryImages.map((_, index) => (
                    <span 
                      key={index} 
                      className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. STATS SECTION */}
          <section className="stats-section">
            <div className="container stats-grid">
              <div className="stat-item">
                <div className="stat-number">80.000+</div>
                <div className="stat-label">Arbeitsstunden</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">17+</div>
                <div className="stat-label">Funktionsmodule</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Jahre Erfahrung</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">VanBuilder Award</div>
              </div>
            </div>
          </section>

                   {/* 4. SERVICES SECTION */}
          <section id="services" className="services-section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">UNSERE LEISTUNGEN</span>
                <h2>Alles für deinen perfekten Ausbau</h2>
              </div>
              <div className="services-grid">
                
                {/* Karte 1: Komplettausbau */}
                <div className="service-card">
                  <div className="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 17h4V5H2v12h3" />
                      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                      <path d="M14 17h1" />
                      <circle cx="7.5" cy="17.5" r="2.5" />
                      <circle cx="17.5" cy="17.5" r="2.5" />
                    </svg>
                  </div>
                  <h3>Komplettausbau</h3>
                  <p>Von der Planung bis zur finalen Abnahme. Wir bauen deinen Camper komplett nach deinen Vorstellungen.</p>
                </div>

                {/* Karte 2: Campermodule */}
                <div className="service-card">
                  <div className="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                  </div>
                  <h3>Campermodule</h3>
                  <p>Über 17 vorgefertigte, praxiserprobte Module für Schlaf, Küche, Bad und Stauraum zum Selbsteinbau.</p>
                </div>

                {/* Karte 3: Service & Beratung */}
                <div className="service-card">
                  <div className="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <h3>Service & Beratung</h3>
                  <p>Individuelle Anpassungen, Montage-Unterstützung und lebenslange Beratung für dein Modul.</p>
                </div>

              </div>
            </div>
          </section>

          {/* 5. CTA SECTION */}
          <section id="contact" className="cta-section">
            <div className="container cta-content">
              <h2>Bereit für den Ausbau?</h2>
              <p>Wir helfen dir, die besten Lösungen für dein Fahrzeug zu finden – zum besten Preis und in bester Qualität.</p>
              <div className="cta-features">
                <span>✓ Maßgeschneiderte Beratung</span>
                <span>✓ VanBuilder Award 2025</span>
                <span>✓ Made in Berlin</span>
              </div>
              <button className="btn-primary btn-large">JETZT ANFRAGEN</button>
            </div>
          </section>
        </>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 CAMPERMANUFAKTUR BERLIN. MADE WITH PASSION.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
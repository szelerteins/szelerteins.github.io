'use client';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" style={{
      background: "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(16, 185, 129, 0.2) 50%, rgba(13, 148, 136, 0.3) 100%), url('https://cdn.pixabay.com/photo/2018/01/03/13/54/golden-retiver-3058383_1280.jpg') center right/cover no-repeat"
    }}>
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">Todo lo que necesita tu <span className="highlight">mascota</span></h1>
          <p className="hero-description">Descubre la mejor selección de productos de calidad para el cuidado y bienestar de tus compañeros peludos.</p>
          <button className="btn-hero" onClick={() => scrollToSection('categorias')}>
            <span>Explorar productos</span>
            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

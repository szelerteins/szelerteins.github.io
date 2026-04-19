import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Header = ({ onCartClick }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { getTotalItems } = useCart();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsDrawerOpen(false);
    }
  };

  return (
    <header className="site-header">
      <nav className="nav-wrapper">
        <div className="nav-logo">
          <img src="/img/ChatGPT Image Apr 6, 2026, 08_02_40 PM.png" alt="Zetapets Logo" style={{ height: '80px', width: 'auto', background: 'transparent', borderRadius: '8px' }} />
        </div>

        <ul className="nav-links">
          <li className="nav-item">
            <a href="#categorias" className="nav-link">Categorías</a>
            <div className="mega-menu">
              <div className="mega-inner">
                <div className="mega-col">
                  <span className="mega-col-title">Mascotas</span>
                  <ul>
                    <li><a href="#categoria-mascotas" onClick={() => scrollToSection('categoria-mascotas')}>Para Ellos</a></li>
                    <li><a href="#categoria-perros" onClick={() => scrollToSection('categoria-perros')}>Para Perros</a></li>
                    <li><a href="#categoria-gatos" onClick={() => scrollToSection('categoria-gatos')}>Para Gatos</a></li>
                  </ul>
                </div>
                <div className="mega-col">
                  <span className="mega-col-title">Productos</span>
                  <ul>
                    <li><a href="#categoria-accesorios" onClick={() => scrollToSection('categoria-accesorios')}>Accesorios</a></li>
                    <li><a href="#categorias" onClick={() => scrollToSection('categorias')}>Alimentos</a></li>
                    <li><a href="#categorias" onClick={() => scrollToSection('categorias')}>Higiene</a></li>
                  </ul>
                </div>
                <div className="mega-col">
                  <span className="mega-col-title">Información</span>
                  <ul>
                    <li><a href="#about" onClick={() => scrollToSection('about')}>Acerca de Nosotros</a></li>
                    <li><a href="#">Envíos</a></li>
                    <li><a href="#">Contacto</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a href="#ofertas" className="nav-link" onClick={() => scrollToSection('ofertas')}>Novedades</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>Acerca de Nosotros</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="btn-primary" id="cartBtn" onClick={onCartClick}>
            <svg style={{ width: '18px', height: '18px', marginRight: '6px', stroke: 'currentColor', fill: 'none' }} viewBox="0 0 24 24" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span id="cartBadge">{getTotalItems()}</span>
          </button>
        </div>

        <button className="nav-hamburger" aria-label="Abrir menú" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`nav-drawer ${isDrawerOpen ? 'is-open' : ''}`}>
        <button className="drawer-close" onClick={() => setIsDrawerOpen(false)}>✕</button>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
          <li><a href="#categorias" onClick={() => scrollToSection('categorias')}>Categorías</a></li>
          <li><a href="#ofertas" onClick={() => scrollToSection('ofertas')}>Novedades</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>Acerca de Nosotros</a></li>
        </ul>
      </div>
      <div className={`nav-overlay ${isDrawerOpen ? 'is-visible' : ''}`} onClick={() => setIsDrawerOpen(false)}></div>
    </header>
  );
};

export default Header;

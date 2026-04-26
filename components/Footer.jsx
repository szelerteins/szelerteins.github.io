const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/img/ChatGPT Image Apr 6, 2026, 08_02_40 PM.png" alt="Zetapets Logo" className="footer-logo" style={{ height: '36px', width: 'auto' }} />
          <p>Somos una tienda especializada en productos de calidad para el cuidado y bienestar de tus mascotas.</p>
        </div>
        <div className="footer-col">
          <span className="footer-col-title">Categorías</span>
          <ul>
            <li><a href="#categoria-mascotas">Para Mascotas</a></li>
            <li><a href="#categoria-perros">Para Perros</a></li>
            <li><a href="#categoria-gatos">Para Gatos</a></li>
            <li><a href="#categoria-accesorios">Accesorios</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <span className="footer-col-title">Empresa</span>
          <ul>
            <li><a href="#">Acerca de Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Carreras</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <span className="footer-col-title">Soporte</span>
          <ul>
            <li><a href="#">Envíos</a></li>
            <li><a href="#">Devoluciones</a></li>
            <li><a href="#">Términos</a></li>
            <li><a href="#">Privacidad</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Zetapets. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

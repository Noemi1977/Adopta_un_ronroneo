import React from "react";
import { FaFacebook, FaInstagram, FaX } from "react-icons/fa6";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Información de contacto */}
        <div className="footer-section">
          <h3>Información de contacto</h3>
          <p>
            Aldea Tremañes 34<br />
            985000000<br />
            adoptauronroneo@gmail.com
          </p>
        </div>

        {/* Redes sociales */}
        <div className="footer-section social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={32} color="#1877F2" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} color="#E1306C" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaX size={32} color="#1DA1F2" />
          </a>
        </div>

        {/* Aviso legal */}
        <div className="footer-section">
          <h3>Aviso Legal</h3>
          <ul>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
          </ul>
        </div>
      </div>

      {/* Pie de página */}
      <div className="footer-bottom">
        <p>© Factoria F5</p>
      </div>
    </footer>
  );
};

export default Footer;
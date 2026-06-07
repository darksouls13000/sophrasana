import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            Clara Hédoux
            <span>Yoga Vinyasa · Sophrologie · Bains Sonores</span>
          </div>
          <nav className="footer__links">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
        <div className="footer__bottom">
          © {new Date().getFullYear()} Clara Hédoux — Tous droits réservés
        </div>
      </div>
    </footer>
  )
}

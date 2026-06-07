import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header__inner">
        <NavLink to="/" className="header__logo">
          Clara Hédoux
          <span>Yoga &amp; Sophrologie</span>
        </NavLink>
        <nav className="header__nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Accueil
          </NavLink>
          <NavLink to="/contact" className="header__cta">
            Me contacter
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

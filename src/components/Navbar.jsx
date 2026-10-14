import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import '../styles/navbar.css'

export default function Navbar() {
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return (
    <header className="site-header">
      <div className="top-strip"><div className="top-strip-inner"><span><span className="mini-dot" /> A simpler starting point for public services</span><span className="top-strip-right">Citizen-first information · Local service discovery</span></div></div>
      <div className="navbar">
        <Link to="/" className="brand" aria-label="Janseva home" onClick={closeMenu}><span className="brand-mark"><span>J</span><i /></span><span className="brand-wording"><strong>Janseva</strong><small>GOVERNMENT SERVICE ACCESS</small></span></Link>
        <button className="mobile-menu-toggle" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/departments" onClick={closeMenu}>Departments</NavLink>
          <NavLink to="/offices" onClick={closeMenu}>Offices</NavLink>
          <a href="/#services" onClick={closeMenu}>Help & guidance</a>
          <span className="nav-auth">{user ? <><Link to="/my-applications" onClick={closeMenu}>My Applications</Link><button className="nav-login" onClick={() => { logout(); closeMenu() }}>Logout</button></> : <><Link className="nav-login" to="/login" onClick={closeMenu}>Login</Link><Link className="nav-register" to="/register" onClick={closeMenu}>Register <span aria-hidden="true">→</span></Link></>}</span>
        </nav>
      </div>
    </header>
  )
}

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><Link to="/" className="brand footer-logo"><span className="brand-mark"><span>J</span><i /></span><span className="brand-wording"><strong>Janseva</strong><small>GOVERNMENT SERVICE ACCESS</small></span></Link><p>Helping citizens find the right government service, department and office — before they travel.</p><div className="footer-tagline"><span /> Right service. Right direction.</div></div>
        <div className="footer-column"><h3>Explore</h3><Link to="/services">All services</Link><Link to="/departments">Departments</Link><Link to="/offices">Office locations</Link></div>
        <div className="footer-column"><h3>Your account</h3><Link to="/login">Login</Link><Link to="/register">Create an account</Link><Link to="/my-applications">My applications</Link></div>
        <div className="footer-column footer-note"><h3>Important note</h3><p>Janseva is a service-discovery project. Confirm current requirements, fees, office details and eligibility with the relevant official department before applying.</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Janseva · College project demonstration</span><span>Built around citizens' needs <span className="footer-heart">♥</span></span></div>
    </footer>
  )
}

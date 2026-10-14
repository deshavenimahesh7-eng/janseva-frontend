import { Link } from 'react-router-dom'
import '../styles/services.css'

export default function Login() {
  return (
    <div className="page account-page">
      <div className="account-card">
        <div className="account-icon" aria-hidden="true">↗</div>
        <div className="eyebrow eyebrow-blue">JANSEVA ACCOUNT</div>
        <h1>Welcome back</h1>
        <p>Citizen sign-in is not connected in this demonstration build yet. Authentication should be enabled only after the backend login flow is configured.</p>
        <div className="account-notice"><strong>Demo limitation</strong><span>No credentials are collected or stored on this screen.</span></div>
        <Link className="btn" to="/services">Explore services <span aria-hidden="true">→</span></Link>
        <p className="account-switch">New to Janseva? <Link to="/register">View registration information</Link></p>
      </div>
    </div>
  )
}

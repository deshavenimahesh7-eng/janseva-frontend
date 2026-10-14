import { Link } from 'react-router-dom'
import '../styles/services.css'

export default function Register() {
  return (
    <div className="page account-page">
      <div className="account-card">
        <div className="account-icon" aria-hidden="true">＋</div>
        <div className="eyebrow eyebrow-blue">JOIN JANSEVA</div>
        <h1>Citizen registration</h1>
        <p>Account registration is planned, but it is not connected in this demonstration build. This page does not collect personal information.</p>
        <div className="account-notice"><strong>Coming in a future phase</strong><span>Registration will require a secure backend flow and appropriate privacy safeguards.</span></div>
        <Link className="btn" to="/services">Explore services <span aria-hidden="true">→</span></Link>
        <p className="account-switch">Already have an account? <Link to="/login">Login information</Link></p>
      </div>
    </div>
  )
}

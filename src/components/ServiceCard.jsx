import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-top"><span className="service-card-icon" aria-hidden="true">▤</span><span className="service-card-tag">Service guide</span></div>
      <h3>{service.name}</h3>
      <p className="service-department">{service.department?.name || 'Department information unavailable'}</p>
      <p>{service.eligibility ? `${service.eligibility.slice(0, 112)}${service.eligibility.length > 112 ? '…' : ''}` : 'Explore eligibility, required documents and application guidance.'}</p>
      <Link className="btn" to={`/services/${service.id}`}>View service details <span aria-hidden="true">→</span></Link>
    </article>
  )
}

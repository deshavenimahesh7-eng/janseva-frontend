import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getServiceDetails } from '../api/serviceApi.js'
import DocumentChecklist from '../components/DocumentChecklist.jsx'
import OfficeDetails from '../components/OfficeDetails.jsx'
import '../styles/services.css'

export default function ServiceDetails() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    getServiceDetails(id).then((result) => { if (active) setData(result) }).catch(() => { if (active) setError('We could not load this service. Check that the backend is running, or return to the service directory and try again.') }).finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [id])

  if (loading) return <div className="page loading-state" role="status"><span className="loading-spinner" /><p>Loading service details…</p></div>
  if (error || !data?.service) return <div className="page"><div className="service-empty" role="alert"><div className="service-empty-icon">!</div><h3>Service details unavailable</h3><p>{error || 'The requested service could not be found.'}</p><Link className="btn" to="/services">Back to services</Link></div></div>

  const { service, documents = [], offices = [], officers = [] } = data
  return (
    <div className="page">
      <div className="service-detail-hero"><div className="eyebrow eyebrow-blue">SERVICE INFORMATION</div><h1>{service.name}</h1><p>{service.department?.name || 'Department information not provided'}</p><div className="detail-meta"><div><span>Estimated processing time</span><strong>{service.processingDays ? `About ${service.processingDays} days` : 'Confirm with department'}</strong></div><div><span>Application fee</span><strong>{service.fees || 'Confirm with department'}</strong></div></div></div>
      <div className="service-detail-layout"><div>
        <section className="detail-panel"><h2>Who may be eligible?</h2><p>{service.eligibility || 'Eligibility information has not been provided. Please confirm requirements with the responsible department.'}</p></section>
        <section className="detail-panel"><h2>Documents to prepare</h2>{documents.length ? <DocumentChecklist documents={documents} /> : <p>No document list is available yet. Contact the responsible department before your visit.</p>}</section>
        <section className="detail-panel"><h2>Application guidance</h2><p>{service.procedureSteps || 'Application steps have not been provided. Confirm the current process with the responsible department.'}</p></section>
        <section className="detail-panel"><h2>Responsible office</h2>{offices.length ? offices.map((office) => <OfficeDetails key={office.id} office={office} officers={officers} />) : <p>Office details are not available in the directory yet. Please verify the correct office with the relevant department.</p>}</section>
      </div><aside>
        <section className="detail-panel notice-panel"><h2>Before you travel</h2><p>Requirements, fees, office hours and processing times may change. Please verify the latest information with the official department before visiting.</p></section>
        <section className="detail-panel"><h2>Next step</h2><p>Use this guide to prepare. Online application is available only if the connected service supports it.</p><Link className="btn" to={`/apply/${service.id}`}>Continue <span aria-hidden="true">→</span></Link><p className="muted" style={{fontSize: '11px', marginTop: '12px'}}>Sign-in may be required. This project does not represent a live government portal.</p></section>
      </aside></div>
    </div>
  )
}

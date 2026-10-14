import { useEffect, useState } from 'react'
import { getOffices } from '../api/departmentApi.js'
import OfficeDetails from '../components/OfficeDetails.jsx'
import '../styles/services.css'

export default function OfficeLocations() {
  const [offices, setOffices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    let active = true
    getOffices().then((data) => { if (active) setOffices(Array.isArray(data) ? data : []) }).catch(() => { if (active) setError('The office directory is unavailable. Check that the Janseva backend is running.') }).finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [])
  return (
    <div className="page">
      <div className="service-page-heading"><div className="eyebrow eyebrow-blue">PLAN BEFORE YOU TRAVEL</div><h1>Find an office</h1><p>Review available office information before making a visit. Always confirm the address and working hours with the relevant department.</p></div>
      {loading && <div className="loading-state" role="status"><span className="loading-spinner" /><p>Loading office directory…</p></div>}
      {error && <div className="service-empty" role="alert"><h3>Office directory unavailable</h3><p>{error}</p></div>}
      {!loading && !error && offices.length === 0 && <div className="service-empty"><h3>No offices listed yet</h3><p>Office details will appear here when they are added to the Janseva directory.</p></div>}
      {!loading && !error && offices.length > 0 && <div className="grid">{offices.map((office) => <OfficeDetails key={office.id} office={office} />)}</div>}
      {!loading && !error && offices.length > 0 && <p className="muted" style={{fontSize:'12px',marginTop:'22px'}}>Note: Some entries may be demonstration data. Verify official addresses and hours before visiting.</p>}
    </div>
  )
}

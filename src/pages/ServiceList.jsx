import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { searchServices } from '../api/serviceApi.js'
import '../styles/services.css'

export default function ServiceList() {
  const [params, setParams] = useSearchParams()
  const q = params.get('search') || ''
  const [services, setServices] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    setError('')
    searchServices(q)
      .then((data) => { if (active) setServices(Array.isArray(data) ? data : []) })
      .catch(() => { if (active) { setServices([]); setError('We could not connect to the service directory. Please check that the Janseva backend and database are running, then try again.') } })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [q])

  return (
    <div className="page">
      <div className="service-page-heading"><div className="eyebrow eyebrow-blue">JANSEVA SERVICE DIRECTORY</div><h1>Find the right service.</h1><p>Search for a service to learn about eligibility, documents, application steps and the department that may be responsible.</p></div>
      <SearchBar onSearch={(text) => setParams(text ? { search: text } : {})} placeholder="Try income certificate, pension, ration card..." />
      {!loading && !error && <div className="service-list-toolbar"><span><strong>{services.length}</strong> {services.length === 1 ? 'service' : 'services'} available{q ? ` for “${q}”` : ''}</span><span>Service details should be confirmed with the relevant department.</span></div>}
      {loading && <div className="loading-state" role="status"><span className="loading-spinner" /><p>Loading service directory…</p></div>}
      {error && <div className="service-empty" role="alert"><div className="service-empty-icon">!</div><h3>Service directory unavailable</h3><p>{error}</p></div>}
      {!loading && !error && services.length > 0 && <div className="service-results-grid">{services.map((s) => <ServiceCard key={s.id} service={s} />)}</div>}
      {!loading && !error && services.length === 0 && <div className="service-empty"><div className="service-empty-icon">⌕</div><h3>No matching services found</h3><p>Try a shorter search, a different spelling, or browse all services by clearing your search.</p></div>}
    </div>
  )
}

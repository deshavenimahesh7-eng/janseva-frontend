import { useEffect, useState } from 'react'
import { getDepartments } from '../api/departmentApi.js'
import '../styles/services.css'

export default function Departments() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    let active = true
    getDepartments().then((data) => { if (active) setList(Array.isArray(data) ? data : []) }).catch(() => { if (active) setError('The department directory is unavailable. Check that the Janseva backend is running.') }).finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [])
  return (
    <div className="page">
      <div className="service-page-heading"><div className="eyebrow eyebrow-blue">PUBLIC SERVICE DIRECTORY</div><h1>Government departments</h1><p>Explore departments connected to the Janseva service directory and understand the areas they may handle.</p></div>
      {loading && <div className="loading-state" role="status"><span className="loading-spinner" /><p>Loading departments…</p></div>}
      {error && <div className="service-empty" role="alert"><h3>Departments unavailable</h3><p>{error}</p></div>}
      {!loading && !error && list.length === 0 && <div className="service-empty"><h3>No departments listed yet</h3><p>Department information will appear here when it is added to the Janseva directory.</p></div>}
      {!loading && !error && list.length > 0 && <div className="service-results-grid">{list.map((d, index) => <article className="service-card" key={d.id}><div className="service-card-top"><span className="service-card-icon" aria-hidden="true">⌂</span><span className="service-card-tag">Department</span></div><h3>{d.name}</h3><p>{d.description || 'Description not provided yet.'}</p></article>)}</div>}
    </div>
  )
}

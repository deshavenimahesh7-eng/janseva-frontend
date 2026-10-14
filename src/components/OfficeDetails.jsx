export default function OfficeDetails({ office, officers = [] }) {
  const mine = officers.filter((o) => o.office?.id === office.id)
  const sampleContact = (contact) => !contact || /^0+$/.test(String(contact).replace(/\D/g, ''))
  return (
    <article className="card office-card">
      <h3>{office.name || 'Office name not provided'}</h3>
      <p>{office.address || 'Address not provided'}</p>
      {(office.mandal || office.district) && <p className="muted">{[office.mandal, office.district].filter(Boolean).join(', ')}</p>}
      {office.timings && <p><strong>Listed hours:</strong> {office.timings}</p>}
      {mine.map((o) => <p key={o.id}><strong>{o.designation || 'Officer'}</strong>{o.name && o.name !== 'Sample Officer' ? ` — ${o.name}` : ''}{!sampleContact(o.contact) && <span> · {o.contact}</span>}</p>)}
      {mine.some((o) => o.name === 'Sample Officer' || sampleContact(o.contact)) && <p className="muted" style={{fontSize:'11px'}}>Some officer details are sample placeholders and must be verified.</p>}
      {office.mapLink && !String(office.mapLink).includes('maps.google.com') && <a className="btn" href={office.mapLink} target="_blank" rel="noreferrer">Open map <span aria-hidden="true">↗</span></a>}
    </article>
  )
}

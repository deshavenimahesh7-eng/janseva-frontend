export default function DocumentChecklist({ documents = [] }) {
  return (
    <ul className="checklist">
      {documents.map((d) => (
        <li key={d.id}>
          {d.documentName} {d.mandatory ? '' : <em>(if applicable)</em>}
        </li>
      ))}
    </ul>
  )
}

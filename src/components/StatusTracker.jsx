// TODO: show application timeline from /applications/{id}/status
export default function StatusTracker({ history = [] }) {
  return (
    <ol className="timeline">
      {history.map((h) => (
        <li key={h.id}>{h.status} - {h.remarks}</li>
      ))}
    </ol>
  )
}

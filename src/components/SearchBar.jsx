import { useState } from 'react'

export default function SearchBar({ onSearch, placeholder = 'Search for a service (e.g., caste certificate)' }) {
  const [text, setText] = useState('')
  const submit = (e) => {
    e.preventDefault()
    onSearch(text.trim())
  }
  return (
    <form className="search-bar" onSubmit={submit} role="search">
      <span className="search-symbol" aria-hidden="true">⌕</span>
      <label className="sr-only" htmlFor="service-search">Search government services</label>
      <input id="service-search" value={text} onChange={(e) => setText(e.target.value)} placeholder={placeholder} />
      <button type="submit"><span>Search</span><span aria-hidden="true">→</span></button>
    </form>
  )
}

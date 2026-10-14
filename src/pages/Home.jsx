import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar.jsx'
import '../styles/home.css'

const categories = [
  { icon: '▤', title: 'Certificates', description: 'Income, caste, residence and other certificates', query: 'certificate', tone: 'blue' },
  { icon: '▣', title: 'Identity & Documents', description: 'Guidance for essential identity documents', query: 'identity', tone: 'teal' },
  { icon: '♡', title: 'Welfare Schemes', description: 'Explore public benefit schemes and support', query: 'welfare', tone: 'orange' },
  { icon: '◷', title: 'Pensions', description: 'Find pension-related services and guidance', query: 'pension', tone: 'purple' },
  { icon: '▦', title: 'Ration & Civil Supplies', description: 'Ration cards and public distribution services', query: 'ration card', tone: 'green' },
  { icon: '▧', title: 'Education', description: 'Scholarships and student support services', query: 'education', tone: 'blue' },
  { icon: '↗', title: 'Employment', description: 'Employment services and registrations', query: 'employment', tone: 'orange' },
  { icon: '⌂', title: 'Other Public Services', description: 'Discover more services for your family', query: '', tone: 'teal' },
]

const steps = [
  { number: '01', icon: '⌕', title: 'Search for a service', text: 'Tell us what you need in simple words.' },
  { number: '02', icon: '✓', title: 'Check what you need', text: 'Review eligibility, documents and application guidance.' },
  { number: '03', icon: '⌖', title: 'Find the right office', text: 'Identify the department and office to contact.' },
  { number: '04', icon: '→', title: 'Visit with confidence', text: 'Prepare before you travel and avoid unnecessary visits.' },
]

export default function Home() {
  const navigate = useNavigate()
  const goToSearch = (q = '') => navigate(q ? `/services?search=${encodeURIComponent(q)}` : '/services')

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> YOUR GUIDE TO PUBLIC SERVICES</div>
            <h1>Government services,<br /><span>made simple.</span></h1>
            <p className="hero-lede">Find the right service, department and government office — with the information you need before you make the trip.</p>
            <SearchBar onSearch={goToSearch} placeholder="Search caste certificate, pension, ration card..." />
            <div className="hero-trust"><span className="trust-check">✓</span> Clear guidance <span className="trust-divider">·</span> Less confusion <span className="trust-divider">·</span> Better prepared visits</div>
            <button className="text-cta" onClick={() => goToSearch('')}>Explore all services <span aria-hidden="true">→</span></button>
          </div>
          <div className="hero-visual" aria-label="Citizens accessing public services">
            <div className="hero-photo-main" role="img" aria-label="Citizens receiving assistance at a public service centre" />
            <div className="photo-overlay" />
            <div className="hero-photo-caption"><span className="caption-icon">✦</span><div><strong>One place to start</strong><span>Know before you go.</span></div></div>
            <div className="floating-note"><span className="floating-note-icon">✓</span><div><strong>Be prepared</strong><span>Documents · Office · Steps</span></div></div>
            <div className="hero-visual-accent" />
          </div>
        </div>
        <div className="hero-bottom-line"><span /> A citizen-first service discovery platform <span /></div>
      </section>

      <section className="section service-section" id="services">
        <div className="section-heading">
          <div><div className="eyebrow eyebrow-blue">EXPLORE BY CATEGORY</div><h2>What can we help you with?</h2><p>Start with the service you need. Janseva helps you understand where to go next.</p></div>
          <button className="outline-cta" onClick={() => goToSearch('')}>View all services <span>→</span></button>
        </div>
        <div className="category-grid">
          {categories.map((item) => <button type="button" className="category-card" key={item.title} onClick={() => goToSearch(item.query)}>
            <span className={`category-icon ${item.tone}`} aria-hidden="true">{item.icon}</span>
            <span className="category-title">{item.title}</span>
            <span className="category-description">{item.description}</span>
            <span className="category-arrow" aria-hidden="true">↗</span>
          </button>)}
        </div>
      </section>

      <section className="how-section">
        <div className="section how-inner">
          <div className="how-intro"><div className="eyebrow eyebrow-light">A CLEARER WAY FORWARD</div><h2>Four steps.<br /><span>Less uncertainty.</span></h2><p>Government services can feel complicated. We help you prepare with useful information in one place.</p><button className="light-cta" onClick={() => goToSearch('')}>Find your service <span>→</span></button></div>
          <div className="steps-grid">{steps.map((step) => <div className="step-card" key={step.number}><div className="step-top"><span className="step-icon">{step.icon}</span><span className="step-number">{step.number}</span></div><h3>{step.title}</h3><p>{step.text}</p></div>)}</div>
        </div>
      </section>

      <section className="section information-section">
        <div className="info-photo" role="img" aria-label="A citizen getting help with documents" />
        <div className="info-copy"><div className="eyebrow eyebrow-blue">THE RIGHT INFORMATION MATTERS</div><h2>Make your next visit count.</h2><p className="info-lede">A little preparation can save a long journey. Check the details before leaving home.</p>
          <div className="info-points">
            <div><span className="info-point-icon">▤</span><p><strong>Documents to prepare</strong><span>Understand which documents may be needed.</span></p></div>
            <div><span className="info-point-icon">◎</span><p><strong>Eligibility and steps</strong><span>Know the general requirements and process.</span></p></div>
            <div><span className="info-point-icon">⌖</span><p><strong>Department and office</strong><span>Find the responsible office when details are available.</span></p></div>
          </div>
          <button className="primary-cta" onClick={() => goToSearch('')}>Find a service <span>→</span></button>
        </div>
      </section>

      <section className="citizen-banner"><div className="citizen-banner-inner"><div className="banner-symbol" aria-hidden="true">✦</div><div><h2>Less searching. Fewer wrong turns.</h2><p>Janseva is designed to help citizens feel more informed before visiting a government office.</p></div><button className="banner-cta" onClick={() => goToSearch('')}>Get started <span>→</span></button></div></section>
    </div>
  )
}

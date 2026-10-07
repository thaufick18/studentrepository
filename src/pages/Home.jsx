import { ArrowDownRight, ArrowRight, BriefcaseBusiness, ClipboardList, Cpu, RadioTower } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home({ jobCount, applicationCount }) {
  return (
    <div className="home-page">
      <section className="hero-panel">
        <div className="circuit-lines" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> INTERNSHIP COMMAND CENTER</span>
          <h1>Student Job<br /><span>Tracker</span><b className="cursor-mark">_</b></h1>
          <p>Find internships, explore opportunities, and track your applications.</p>
          <div className="hero-actions"><Link className="button button-primary" to="/jobs">Explore jobs <ArrowRight size={17} /></Link><Link className="button button-quiet" to="/applications">Track applications <ArrowDownRight size={16} /></Link></div>
          <div className="hero-footnote"><span className="signal-bars"><i /><i /><i /><i /></span> YOUR NEXT STEP STARTS HERE</div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="visual-core"><Cpu size={44} strokeWidth={1.2} /><span>CAREER<br />NODE</span></div>
          <span className="visual-label label-top">01 / DISCOVER</span><span className="visual-label label-bottom">SIGNAL: OPEN</span>
          <span className="visual-coordinate">40° 42′ 46″ N<br />74° 00′ 21″ W</span><span className="visual-cross cross-one">+</span><span className="visual-cross cross-two">+</span>
        </div>
        <span className="hero-index">STUDENT EDITION <span>·</span> v1.0</span>
      </section>
      <section className="overview-section" aria-labelledby="overview-heading">
        <div className="section-heading-row"><div><span className="eyebrow section-eyebrow">LIVE OVERVIEW / 01</span><h2 id="overview-heading">Your dashboard</h2></div><span className="dashboard-status"><RadioTower size={14} /> LOCAL WORKSPACE</span></div>
        <div className="stats-grid">
          <article className="stat-panel"><span className="stat-icon"><BriefcaseBusiness size={18} /></span><span className="stat-label">OPPORTUNITIES</span><strong>{String(jobCount).padStart(2, '0')}</strong><span className="stat-note">Sample internships listed</span><Link to="/jobs" aria-label="Browse internship opportunities" className="stat-arrow"><ArrowRight size={17} /></Link></article>
          <article className="stat-panel stat-panel-accent"><span className="stat-icon"><ClipboardList size={18} /></span><span className="stat-label">APPLICATIONS TRACKED</span><strong>{String(applicationCount).padStart(2, '0')}</strong><span className="stat-note">Saved in this browser</span><Link to="/applications" aria-label="View tracked applications" className="stat-arrow"><ArrowRight size={17} /></Link></article>
          <article className="next-step-panel"><span className="eyebrow">NEXT ACTION</span><h3>Make your move.</h3><p>Find a role that fits your direction.</p><Link to="/jobs" className="text-link">Open directory <ArrowRight size={15} /></Link><span className="next-step-index">02 / 04</span></article>
        </div>
      </section>
      <p className="sample-disclaimer"><span>!</span> Directory entries are sample records for demonstration and are not verified live vacancies.</p>
    </div>
  );
}
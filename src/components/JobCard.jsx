import { ArrowUpRight, MapPin, Radio, Satellite } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JobCard({ job }) {
  const applyUrl = `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(`${job.title} ${job.company}`)}`;
  return (
    <article className="job-card">
      <div className="job-card-topline">
        <span className="company-monogram" aria-hidden="true">{job.company.slice(0, 1)}</span>
        <span className="job-category">{job.category}</span>
        <span className="job-card-signal"><Radio size={14} /> SAMPLE</span>
      </div>
      <h3>{job.title}</h3>
      <p className="job-company">{job.company}</p>
      <div className="job-meta"><span><MapPin size={15} />{job.location}</span><span><Satellite size={15} />{job.type}</span></div>
      <div className="job-card-actions">
        <a className="text-link" href={applyUrl} target="_blank" rel="noreferrer">Apply <ArrowUpRight size={15} /></a>
        <Link className="button button-small button-outline" to={`/add?title=${encodeURIComponent(job.title)}&company=${encodeURIComponent(job.company)}`}>Track application</Link>
      </div>
    </article>
  );
}
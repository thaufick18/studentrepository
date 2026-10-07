import { useMemo, useState } from 'react';
import { ClipboardList, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const statusOptions = ['Applied', 'Interview', 'Selected', 'Rejected'];

export default function Applications({ applications, onDeleteApplication }) {
  const [statusFilter, setStatusFilter] = useState('');
  const filteredApplications = useMemo(() => applications.filter((application) => !statusFilter || application.status === statusFilter), [applications, statusFilter]);
  function confirmDelete(application) {
    if (window.confirm(`Delete the application for ${application.jobTitle} at ${application.company}?`)) onDeleteApplication(application.id);
  }

  return (
    <div className="content-page applications-page">
      <div className="page-heading"><div><span className="eyebrow section-eyebrow">YOUR PIPELINE / 04</span><h1>My applications</h1><p>Every application, one clear view of what comes next.</p></div><Link to="/add" className="button button-primary"><Plus size={17} /> Add application</Link></div>
      <section className="application-summary" aria-label="Application summary"><div><span className="summary-icon"><ClipboardList size={18} /></span><span className="summary-label">TOTAL TRACKED</span><strong>{applications.length.toString().padStart(2, '0')}</strong></div><span className="summary-divider" /><label className="status-filter"><span>Filter by status</span><select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}><option value="">All statuses</option>{statusOptions.map((status) => <option key={status}>{status}</option>)}</select></label></section>
      {filteredApplications.length === 0 ? (
        <div className="empty-state applications-empty"><span className="empty-icon"><ClipboardList size={22} /></span><h2>No applications found</h2><p>{applications.length ? 'No saved applications match this status.' : 'Your tracked opportunities will appear here.'}</p><Link to="/add" className="button button-outline"><Plus size={16} /> Add application</Link></div>
      ) : (
        <div className="application-table-wrap"><table className="application-table"><thead><tr><th>ROLE / COMPANY</th><th>STUDENT</th><th>APPLIED ON</th><th>STATUS</th><th><span className="sr-only">Actions</span></th></tr></thead><tbody>{filteredApplications.map((application) => (
          <tr key={application.id}><td><strong>{application.jobTitle}</strong><span>{application.company}</span></td><td><strong className="student-name">{application.studentName}</strong><span>{application.email}</span></td><td className="date-cell">{formatDate(application.applicationDate)}</td><td><span className={`status-badge status-${application.status.toLowerCase()}`}><i />{application.status}</span></td><td><button className="icon-button delete-button" type="button" aria-label={`Delete ${application.jobTitle} application`} title="Delete application" onClick={() => confirmDelete(application)}><Trash2 size={16} /></button></td></tr>
        ))}</tbody></table></div>
      )}
    </div>
  );
}

function formatDate(dateValue) {
  const date = new Date(`${dateValue}T00:00:00`);
  return Number.isNaN(date.getTime()) ? dateValue : new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
}
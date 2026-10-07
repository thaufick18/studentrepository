import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Check, ClipboardPlus } from 'lucide-react';

const initialForm = { studentName: '', email: '', jobTitle: '', company: '', applicationDate: '', status: 'Applied' };
const statuses = ['Applied', 'Interview', 'Selected', 'Rejected'];

export default function AddApplication({ onAddApplication }) {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const [form, setForm] = useState({ ...initialForm, jobTitle: params.get('title') || '', company: params.get('company') || '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSuccess(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    for (const [field, value] of Object.entries(form)) if (!value.trim()) nextErrors[field] = 'This field is required.';
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = 'Enter a valid email address, such as name@example.com.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    onAddApplication({ ...form, studentName: form.studentName.trim(), email: form.email.trim(), jobTitle: form.jobTitle.trim(), company: form.company.trim(), id: `${Date.now()}-${Math.random().toString(16).slice(2)}` });
    setSuccess(true);
    setForm(initialForm);
  }

  return (
    <div className="content-page form-page">
      <div className="page-heading"><div><span className="eyebrow section-eyebrow">APPLICATION LOG / 03</span><h1>Add an application</h1><p>Keep each opportunity and its progress in one place.</p></div></div>
      <div className="form-layout">
        <form className="application-form" onSubmit={handleSubmit} noValidate>
          <div className="form-title"><span className="form-title-icon"><ClipboardPlus size={19} /></span><div><h2>Application details</h2><p>Fields marked <span aria-hidden="true">*</span> are required.</p></div></div>
          {success && <div className="success-message" role="status"><Check size={17} /> Application saved. You can find it in My applications.</div>}
          <div className="form-grid">
            <FormField label="Student name" name="studentName" value={form.studentName} onChange={updateField} error={errors.studentName} placeholder="e.g. Alex Morgan" />
            <FormField label="Email address" name="email" type="email" value={form.email} onChange={updateField} error={errors.email} placeholder="you@example.com" />
            <FormField label="Job title" name="jobTitle" value={form.jobTitle} onChange={updateField} error={errors.jobTitle} placeholder="e.g. Software Intern" />
            <FormField label="Company name" name="company" value={form.company} onChange={updateField} error={errors.company} placeholder="e.g. Northstar Robotics" />
            <FormField label="Application date" name="applicationDate" type="date" value={form.applicationDate} onChange={updateField} error={errors.applicationDate} />
            <label className={`form-field${errors.status ? ' has-error' : ''}`}><span>Application status <b>*</b></span><select name="status" value={form.status} onChange={updateField}>{statuses.map((status) => <option key={status}>{status}</option>)}</select>{errors.status && <small className="field-error">{errors.status}</small>}</label>
          </div>
          <div className="form-actions"><button className="button button-primary" type="submit">Save application <Check size={16} /></button><button className="button button-quiet" type="button" onClick={() => navigate('/applications')}>View applications</button></div>
        </form>
        <aside className="form-aside"><span className="eyebrow">LOCAL STORAGE / ENABLED</span><div className="aside-rule" /><h3>Your progress,<br />kept close.</h3><p>Application records stay in this browser, even after you close or refresh this page.</p><div className="aside-code"><span>RECORD</span><code>APP / STUDENT / 001</code><i /></div></aside>
      </div>
    </div>
  );
}

function FormField({ label, name, type = 'text', value, onChange, error, placeholder }) {
  return <label className={`form-field${error ? ' has-error' : ''}`}><span>{label} <b>*</b></span><input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} />{error && <small className="field-error" id={`${name}-error`}>{error}</small>}</label>;
}
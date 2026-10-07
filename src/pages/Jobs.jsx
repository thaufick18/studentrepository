import { useMemo, useState } from 'react';
import { BriefcaseBusiness, CircleHelp } from 'lucide-react';
import JobCard from '../components/JobCard.jsx';
import SearchBar from '../components/SearchBar.jsx';

const jobs = [
  { id: 1, title: 'Embedded Systems Intern', company: 'Northstar Robotics', location: 'Austin, TX', category: 'Embedded Systems', type: 'Hybrid' },
  { id: 2, title: 'IoT Engineering Intern', company: 'Signal & Circuit', location: 'Remote', category: 'IoT', type: 'Remote' },
  { id: 3, title: 'Frontend Developer Intern', company: 'Brightline Studio', location: 'New York, NY', category: 'Web Development', type: 'Hybrid' },
  { id: 4, title: 'Electronics Design Intern', company: 'Voltworks Labs', location: 'San Jose, CA', category: 'Electronics', type: 'On-site' },
  { id: 5, title: 'Software Engineering Intern', company: 'Waypoint Systems', location: 'Remote', category: 'Software', type: 'Remote' },
  { id: 6, title: 'Firmware Test Intern', company: 'Kiteframe Devices', location: 'Boston, MA', category: 'Embedded Systems', type: 'On-site' },
  { id: 7, title: 'Connected Devices Intern', company: 'Commonwave Tech', location: 'Chicago, IL', category: 'IoT', type: 'Hybrid' },
  { id: 8, title: 'Full-stack Web Intern', company: 'Fieldnote Digital', location: 'Remote', category: 'Web Development', type: 'Remote' },
];
const categories = ['Electronics', 'Embedded Systems', 'IoT', 'Web Development', 'Software'];
const locations = [...new Set(jobs.map((job) => job.location))].sort();

export default function Jobs() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const filteredJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return jobs.filter((job) => {
      const matchesSearch = !normalizedQuery || `${job.title} ${job.company}`.toLowerCase().includes(normalizedQuery);
      return matchesSearch && (!category || job.category === category) && (!location || job.location === location);
    });
  }, [query, category, location]);

  return (
    <div className="content-page jobs-page">
      <div className="page-heading"><div><span className="eyebrow section-eyebrow">DIRECTORY / 02</span><h1>Explore opportunities</h1><p>Browse student internships across engineering and technology.</p></div><div className="heading-count"><BriefcaseBusiness size={17} /><span>{filteredJobs.length.toString().padStart(2, '0')}</span><small>RESULTS</small></div></div>
      <div className="sample-notice"><CircleHelp size={16} /><span>Sample records only. These opportunities are not verified live vacancies.</span></div>
      <SearchBar query={query} onQueryChange={setQuery} category={category} onCategoryChange={setCategory} location={location} onLocationChange={setLocation} categories={categories} locations={locations} />
      {filteredJobs.length ? <div className="jobs-grid">{filteredJobs.map((job) => <JobCard key={job.id} job={job} />)}</div> : <div className="empty-state"><span className="empty-icon"><BriefcaseBusiness size={22} /></span><h2>No results found</h2><p>Try another title, company, category, or location.</p><button className="button button-outline" type="button" onClick={() => { setQuery(''); setCategory(''); setLocation(''); }}>Clear filters</button></div>}
    </div>
  );
}
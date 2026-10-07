import { Search } from 'lucide-react';

export default function SearchBar({ query, onQueryChange, category, onCategoryChange, location, onLocationChange, categories, locations }) {
  return (
    <section className="filter-panel" aria-label="Filter internship opportunities">
      <label className="search-field"><Search size={18} aria-hidden="true" /><span className="sr-only">Search by job title or company</span><input type="search" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search role or company" /></label>
      <label className="select-field"><span className="sr-only">Filter by category</span><select value={category} onChange={(event) => onCategoryChange(event.target.value)}><option value="">All categories</option>{categories.map((option) => <option key={option}>{option}</option>)}</select></label>
      <label className="select-field"><span className="sr-only">Filter by location</span><select value={location} onChange={(event) => onLocationChange(event.target.value)}><option value="">All locations</option>{locations.map((option) => <option key={option}>{option}</option>)}</select></label>
    </section>
  );
}
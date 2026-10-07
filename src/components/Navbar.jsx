import { BriefcaseBusiness, ClipboardList, Home as HomeIcon, Menu, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', icon: HomeIcon, end: true },
  { to: '/jobs', label: 'Explore jobs', icon: BriefcaseBusiness },
  { to: '/add', label: 'Add application', icon: Plus },
  { to: '/applications', label: 'My applications', icon: ClipboardList },
];

export default function Navbar({ applicationCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-inner">
        <NavLink className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><BriefcaseBusiness size={19} /></span>
          <span>job<span className="brand-accent">track</span><small>STUDENT EDITION</small></span>
        </NavLink>
        <button className="icon-button menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              <Icon size={16} aria-hidden="true" /><span>{label}</span>
              {to === '/applications' && applicationCount > 0 && <span className="nav-count">{applicationCount}</span>}
            </NavLink>
          ))}
        </nav>
        <span className="online-indicator"><i /> All systems ready</span>
      </div>
    </header>
  );
}
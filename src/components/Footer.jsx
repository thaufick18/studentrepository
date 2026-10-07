import { Activity } from 'lucide-react';

export default function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><span><Activity size={15} /> Student Job Tracker <span className="footer-divider">|</span> Mini Project</span><span>© {new Date().getFullYear()} Student Job Tracker</span></div></footer>;
}
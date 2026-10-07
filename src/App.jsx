import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Jobs from './pages/Jobs.jsx';
import AddApplication from './pages/AddApplication.jsx';
import Applications from './pages/Applications.jsx';

const STORAGE_KEY = 'student-job-tracker-applications';

function readApplications() {
  try {
    const savedApplications = localStorage.getItem(STORAGE_KEY);
    const parsedApplications = savedApplications ? JSON.parse(savedApplications) : [];
    return Array.isArray(parsedApplications) ? parsedApplications : [];
  } catch (error) {
    console.error('Could not read saved applications:', error);
    return [];
  }
}

export default function App() {
  const [applications, setApplications] = useState(readApplications);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
    } catch (error) {
      console.error('Could not save applications:', error);
    }
  }, [applications]);

  function addApplication(application) {
    setApplications((current) => [application, ...current]);
  }

  function deleteApplication(applicationId) {
    setApplications((current) => current.filter((application) => application.id !== applicationId));
  }

  return (
    <div className="app-shell">
      <Navbar applicationCount={applications.length} />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home jobCount={8} applicationCount={applications.length} />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/add" element={<AddApplication onAddApplication={addApplication} />} />
          <Route path="/applications" element={<Applications applications={applications} onDeleteApplication={deleteApplication} />} />
          <Route path="*" element={<Home jobCount={8} applicationCount={applications.length} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
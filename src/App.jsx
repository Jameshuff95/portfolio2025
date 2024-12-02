import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav/Nav.jsx';

import ContactPage from './pages/contact.jsx';
import HomePage from './pages/home.jsx';
import ProjectsPage from './pages/projects.jsx';
import CertificationsPage from './pages/certifications.jsx';
import MissionPage from './pages/mission.jsx';
import SoftSkillsPage from './pages/softSkills.jsx';
import TechnicalSkillsPage from './pages/technicalSkills.jsx';

import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <div id="main_container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/softSkills" element={<SoftSkillsPage />} />
          <Route path="/technicalSkills" element={<TechnicalSkillsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

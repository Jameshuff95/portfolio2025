import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav/Nav.jsx';
import AboutPage from './pages/about.jsx';
import ContactPage from './pages/contact.jsx';
import HomePage from './pages/home.jsx';
import ProjectPage from './pages/projects.jsx';

import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <div id="main_container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

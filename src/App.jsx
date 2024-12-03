import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav/Nav.jsx';

import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Blog from './pages/blog.jsx';
import Portfolio from './pages/portfolio.jsx';
import Contact from './pages/contact.jsx';
import Resume from './pages/resume.jsx';
import Services from './pages/services.jsx';

import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;

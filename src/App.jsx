import './index.css';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './globalComponents/Nav/Nav.jsx';

import Home from './pages/Home/home.jsx';
import About from './pages/About/about.jsx';
import Blog from './pages/Blog/blog.jsx';
import Portfolio from './pages/Portfolio/portfolio.jsx';
import Contact from './pages/Contact/contact.jsx';
import Resume from './pages/Resume/resume.jsx';
import Services from './pages/Services/services.jsx';

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

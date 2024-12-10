import '../index.css';
import '../App.css';
import '../Components/Nav.jsx';

import Hero from '../components/Hero.jsx';

import Intro from '../components/Intro.jsx';

import FeaturedWork from '../components/FeaturedWork.jsx';

import ContactInformation from '../components/ContactInformation.jsx';

import Testimonials from '../components/Testimonials.jsx';

import Footer from '../Components/Footer.jsx';

const Home = () => {
  return (
    <div id="home" className="page">
      <Hero />
      <Intro />
      <FeaturedWork />
      <ContactInformation />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;

import './Home.css';
import '../../index.css';
import '../../App.css';
import '../../globalComponents/Nav/Nav.css';

import Hero from './components/Hero/Hero.jsx';

import Intro from './components/Intro/Intro.jsx';

import FeaturedWork from './components/FeaturedWork/FeaturedWork.jsx';

import ContactInformation from './components/ContactInformation/ContactInformation.jsx';

import Testimonials from './components/Testimonials/Testimonials.jsx';

import Footer from '../../globalComponents/Footer/Footer.jsx';

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

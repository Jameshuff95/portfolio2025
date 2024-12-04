import './Home.css';
import '../../index.css';
import '../../globalComponents/Nav/Nav.css';

import Hero from './components/Hero/Hero.jsx';

import Intro from './components/Intro/Intro.jsx';

import FeaturedWork from './components/FeaturedWork/FeaturedWork.jsx';

import ContactInformation from './components/ContactInformation/ContactInformation.jsx';

import Testimonials from './components/Testimonials/Testimonials.jsx';

const Home = () => {
  return (
    <div className="page">
      <Hero />
      <Intro />
      <FeaturedWork />
      <Testimonials />
      <ContactInformation />
    </div>
  );
};

export default Home;

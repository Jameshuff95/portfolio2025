import './Home.css';
import '../../index.css';
import '../../globalComponents/Nav/Nav.css';

import Hero from './components/Hero/Hero.jsx';

/*
import Intro from './components/Intro/Intro.jsx';
import CallToAction from './components/CallToAction/CallToAction.jsx';
import ContactInformation from './components/ContactInformation/ContactInformation.jsx';
import FeaturedWork from './components/FeaturedWork/FeaturedWork.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
*/
const Home = () => {
  return (
    <div className="page">
      <Hero />
      {/*
        <Intro />
        <CallToAction />
        <ContactInformation />
        <FeaturedWork />
        <Testimonials />
      */}
    </div>
  );
};

export default Home;

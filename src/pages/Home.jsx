import '../index.css';
import '../App.css';
import '../Components/Nav.jsx';

import Hero from '../Components/Hero.jsx';
import Intro from '../Components/Intro.jsx';
import FeaturedWork from '../Components/FeaturedWork.jsx';
import ContactInformation from '../Components/ContactInformation.jsx';
import Testimonials from '../Components/Testimonials.jsx';
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

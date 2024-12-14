import { Container } from 'react-bootstrap';

import '../index.css';
import '../App.css';
import '../Components/Nav.jsx';
import '../css/Home.css';

import Hero from '../Components/Hero.jsx';
import HomeIntro from '../Components/HomeIntro.jsx';
import FeaturedWork from '../Components/FeaturedWork.jsx';
import ContactInformation from '../Components/ContactInformation.jsx';
import Testimonials from '../Components/Testimonials.jsx';
import Footer from '../Components/Footer.jsx';

const Home = () => {
  return (
    <Container className="page">
      <Hero />
      <HomeIntro />
      <FeaturedWork />
      <Testimonials />
      <ContactInformation />
    </Container>
  );
};

export default Home;

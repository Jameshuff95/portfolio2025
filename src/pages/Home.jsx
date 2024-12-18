import { Container } from 'react-bootstrap';

import '../index.css';
import '../App.css';

import Hero from '../Components/Home/Hero/Hero.jsx';
import HomeIntro from '../Components/Home/HomeIntro.jsx';
import FeaturedWork from '../Components/Home/FeaturedWork/FeaturedWork.jsx';
import ContactInformation from '../Components/Home/ContactInformation.jsx';
import Testimonials from '../Components/Home/Testimonials.jsx';

const Home = () => {
  return (
    <Container>
      <Hero />
      <HomeIntro />
      <FeaturedWork />
      <ContactInformation />
      <Testimonials />
    </Container>
  );
};

export default Home;

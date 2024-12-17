import { Container } from 'react-bootstrap';

import '../index.css';
import '../App.css';
import '../Components/Nav.jsx';

import Hero from '../Components/Hero.jsx';
import HomeIntro from '../Components/HomeIntro.jsx';
import FeaturedWork from '../Components/FeaturedWork.jsx';
import ContactInformation from '../Components/ContactInformation.jsx';
import Testimonials from '../Components/Testimonials.jsx';

const Home = () => {
  return (
    <Container
      style={{
        border: '1px solid green',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Hero />
      <HomeIntro />
      <FeaturedWork />
      <ContactInformation />
      <Testimonials />
    </Container>
  );
};

export default Home;

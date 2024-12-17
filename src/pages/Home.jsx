import { Container } from 'react-bootstrap';

import '../index.css';
import '../App.css';

import Hero from '../Components/Hero/Hero.jsx';
import HomeIntro from '../Components/HomeIntro.jsx';
import FeaturedWork from '../Components/FeaturedWork/FeaturedWork.jsx';
import ContactInformation from '../Components/ContactInformation.jsx';
import Testimonials from '../Components/Testimonials.jsx';

const Home = () => {
  return (
    <Container
      style={{
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

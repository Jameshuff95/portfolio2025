import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useMediaQuery } from 'react-responsive';

import '../../index.css';
import '../../App.css';

import HeroSmall from './HeroSmall.jsx';
import HeroLarge from './HeroLarge.jsx';

const Hero = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 767 });
  const isDeskOrLaptop = useMediaQuery({ minWidth: 768 });

  return (
    <Container
      style={{
        overflow: 'visible',
        padding: '0',
        margin: '1rem 0',
      }}
    >
      {isMobileOrTablet && <HeroSmall />}
      {isDeskOrLaptop && <HeroLarge />}
    </Container>
  );
};

export default Hero;
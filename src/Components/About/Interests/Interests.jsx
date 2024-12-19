import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container } from 'react-bootstrap';

import InterestsMobile from './InterestsMobile';
import InterestsDesktop from './InterestsMobile';
import '../../../index.css';
import '../../../App.css';

const Interests = () => {
  const interests = [
    {
      title: 'Hobby 1',
      description: 'Hobby Description 1',
    },
    {
      title: 'Hobby 2',
      description: 'Hobby Description 2',
    },
    {
      title: 'Hobby 3',
      description: 'Hobby Description 3',
    },
  ];

  const [currentInterest, setCurrentInterest] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInterest(
        (prevInterest) => (prevInterest + 1) % interests.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const isMobileOrTablet = useMediaQuery({ maxWidth: 551 });

  const isDeskOrLaptop = useMediaQuery({ minWidth: 551 });

  return (
    <Container>
      {isMobileOrTablet && (
        <InterestsMobile
          interests={interests}
          currentInterest={currentInterest}
          setCurrentInterest={setCurrentInterest}
        />
      )}
      {isDeskOrLaptop && <InterestsDesktop interests={interests} />}
    </Container>
  );
};

export default Interests;

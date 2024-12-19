import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import EducationMobile from './EducationMobile.jsx';
import EducationDesktop from './EducationDesktop.jsx';
import '../../../index.css';
import '../../../App.css';

const schools = [
  {
    name: 'Capella University - Online',
    degree: 'B.S. Web Development',
    start: 'start 1',
    end: 'End 1',
  },
  {
    name: 'Southern New Hampshire University - Online',
    degree: 'B.S. Software Engineering',
    start: 'start 2',
    end: 'End 2',
  },
];

const Education = () => {
  const [currentEducation, setCurrentEducation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEducation(
        (prevEducation) => (prevEducation + 1) % schools.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const isMobileOrTablet = useMediaQuery({ maxWidth: 551 });

  const isDeskOrLaptop = useMediaQuery({ minWidth: 551 });

  return (
    <Container>
      {isMobileOrTablet && (
        <EducationMobile
          schools={schools}
          currentEducation={currentEducation}
          setCurrentEducation={setCurrentEducation}
        />
      )}
      {isDeskOrLaptop && <EducationDesktop schools={schools} />}
    </Container>
  );
};

export default Education;

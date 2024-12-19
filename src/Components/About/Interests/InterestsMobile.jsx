import { useEffect } from 'react';
import { Card, Carousel } from 'react-bootstrap';
const InterestsMobile = ({
  interests,
  currentInterest,
  setCurrentInterest,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInterest(
        (prevInterest) => (prevInterest + 1) % interests.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentInterest, setCurrentInterest]);

  return (
    <Card>
      <Card.Title>Other Interests</Card.Title>
      <Carousel
        activeIndex={currentInterest}
        onSelect={(selectedIndex) => setCurrentInterest(selectedIndex)}
      >
        {interests.map((interest, index) => (
          <Carousel.Item key={index}>
            <Card
              className="card-alt d-flex flex-column justify-content-evenly"
              style={{
                width: '95%',
                margin: 'auto',
                padding: '2%',
                height: '80vh',
              }}
            >
              <Card.Title>{interest.title}</Card.Title>
              <Card.Text>{interest.description}</Card.Text>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Card>
  );
};

export default InterestsMobile;

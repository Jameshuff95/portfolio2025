import React, { useEffect } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AchievementsMobile = ({
  achievements,
  currentAchievement,
  setCurrentAchievement,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievement(
        (prevAchievement) => (prevAchievement + 1) % achievements.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentAchievement, setCurrentAchievement]);

  return (
    <Card>
      <Card.Title>Achievements</Card.Title>
      <Carousel
        activeIndex={currentAchievement}
        onSelect={(selectedIndex) => setCurrentAchievement(selectedIndex)}
      >
        {achievements.map((achievement, index) => (
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
              <Card.Title>{achievement.title}</Card.Title>
              <Card.Text>{achievement.description}</Card.Text>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Card>
  );
};

export default AchievementsMobile;

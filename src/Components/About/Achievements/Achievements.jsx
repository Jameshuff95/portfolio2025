import React from 'react';
import { Container } from 'react-bootstrap';
import AchievementsMobile from './AchievementsMobile';
import AchievementsDesktop from './AchievementsDesktop';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import '../../../index.css';
import '../../../App.css';

const achievements = [
  {
    title: 'Developed a Personal Portfolio Website',
    description:
      'Created a professional and visually appealing personal portfolio website using HTML, CSS, and JavaScript. Showcased various projects, skills, and experience, effectively demonstrating my capabilities to potential employers.',
  },
  {
    title: 'Managing GitHub Repositories',
    description:
      'Maintained several active repositories on GitHub, contributing to open-source projects and collaborating with other developers. Implemented version control practices, resolved issues, and regularly updated documentation to ensure project clarity and continuity.',
  },
  {
    title: 'Obtained Certifications',
    description:
      'Earned industry-recognized certifications from platforms like Coursera and Udemy, covering front-end and back-end technologies. Demonstrated commitment to continuous learning and staying current with the latest web development trends and practices.',
  },
];

const Achievements = () => {
  const [currentAchievement, setCurrentAchievement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievement(
        (prevAchievement) => (prevAchievement + 1) % achievements.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const isMobileOrTablet = useMediaQuery({ maxWidth: 551 });

  const isDeskOrLaptop = useMediaQuery({ minWidth: 551 });

  return (
    <Container>
      {isMobileOrTablet && (
        <AchievementsMobile
          achievements={achievements}
          currentAchievement={currentAchievement}
          setCurrentAchievement={setCurrentAchievement}
        />
      )}
      {isDeskOrLaptop && <AchievementsDesktop achievements={achievements} />}
    </Container>
  );
};

export default Achievements;

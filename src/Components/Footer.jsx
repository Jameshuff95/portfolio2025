import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../App.css';

const Footer = () => {
  return (
    <Card
      style={{
        width: '100%',
        background: 'var(--nav-bg)',
        padding: '0',
        position: 'relative',
        color: 'var(--card-text-alt)',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Card.Text
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0',
          margin: '0',
          fontSize: '1.25rem',
          borderTop: '2px solid var(--card-text)',
          width: '100%',
          height: '3rem',
        }}
      >
        &copy; 2024 James Huff. All rights reserved.
      </Card.Text>
    </Card>
  );
};

export default Footer;

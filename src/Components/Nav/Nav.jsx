import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useMediaQuery } from 'react-responsive';

import '../../index.css';
import '../../App.css';
import NavSmall from './NavSmall.jsx';
import NavLarge from './NavLarge.jsx';

const Nav = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: '768px' });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: '768px' });

  return (
    <Card
      style={{
        margin: '0',
        padding: '0',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '10',
        borderBottom: '1px solid red',
      }}
    >
      {isMobileOrTablet && <NavSmall />}
      {isDesktopOrLaptop && <NavLarge />}
    </Card>
  );
};

export default Nav;

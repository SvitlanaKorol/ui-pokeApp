import React from 'react';
import styles from './index.module.scss';
import pokeLogo from '../../../public/pokeapi_256.png';
import { ALT_IMG_NAMES, LINKS_NAMES, LOGO_URL } from '../../constants/constant';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <div className={styles.navBar}>
      <Link to={LOGO_URL} target="_blank" rel="noopener noreferrer" className={styles.navLogo}>
        <img src={pokeLogo} alt={ALT_IMG_NAMES.alt_logo} />
      </Link>
      <Link className={styles.navLink} to="/">
        {LINKS_NAMES.homeLink}
      </Link>
    </div>
  );
};

export default NavBar;

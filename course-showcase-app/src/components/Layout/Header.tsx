import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className={styles.logo}>
            <h1>Anthropic Courses</h1>
          </Link>
          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../../data/courses';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            <h1>Anthropic Courses</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
            <div className={styles.coursesDropdown}>
              <span className={styles.coursesLabel}>Courses</span>
              <div className={styles.dropdownContent}>
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    to={course.path}
                    className={styles.dropdownLink}
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className={styles.mobileNav}>
            <Link 
              to="/" 
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className={styles.mobileCoursesSection}>
              <span className={styles.mobileCoursesLabel}>Courses</span>
              {courses.map((course) => (
                <Link
                  key={course.id}
                  to={course.path}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {course.title}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
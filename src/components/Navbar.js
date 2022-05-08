import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';
import styles from '../styles/Navbar.module.css';
import '@fontsource/montserrat';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftLinks}>
        <h3 className={styles.logo}>Bookstore CMS</h3>
        <ul className={styles.navLinks}>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </div>
      <BsPersonFill className={styles.profileIcon}/>
    </nav>
  );
}

export default Navbar;

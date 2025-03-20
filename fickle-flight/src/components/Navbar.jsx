import React from 'react';
import styles from '/Users/mac2/University/Web2/ReactJS_ASS_3/fickle-flight/fickle-flight/src/styles/Navbar.module.css'; // Create Navbar.module.css

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        FickleFlight
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#">Explore</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Hotels</a></li>
        <li><a href="#">Offers</a></li>
      </ul>
      <div className={styles.userActions}>
        <button className={styles.notification}>🔔</button>
        <div className={styles.profile}>
          {/* Add user profile image or icon here */}
          <img src="/Users/mac2/University/Web2/ReactJS_ASS_3/fickle-flight/fickle-flight/src/assets/expressive-woman-gesturing_23-2150198673.avif" alt="Profile" /> 
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
// src/components/Header.jsx
import styles from '/Users/mac2/University/Web2/ReactJS_ASS_3/fickle-flight/fickle-flight/src/styles/Header.module.css';
import SearchBar from './SearchBar'; // Import SearchBar

function Header() {
  return (
    <header className={styles.header}>
      <h1>FickleFlight</h1>
      <p>Let's explore & travel the world</p>
      <p>Find the best destinations and the most popular stays</p>

      <div className={styles.searchBarContainer}> {/* Container for SearchBar */}
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
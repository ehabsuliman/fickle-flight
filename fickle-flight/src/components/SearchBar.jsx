// src/components/SearchBar.jsx
import styles from '/Users/mac2/University/Web2/ReactJS_ASS_3/fickle-flight/fickle-flight/src/styles/SearchBar.module.css';

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="From" />
      <input type="text" placeholder="To" />
      <input type="date" />
      <input type="date" />
      <button>SEARCH FLIGHTS</button>
    </div>
  );
}

export default SearchBar;
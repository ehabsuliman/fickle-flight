// src/components/RecentSearches.jsx
import styles from '/Users/mac2/University/Web2/ReactJS_ASS_3/fickle-flight/fickle-flight/src/styles/RecentSearches.module.css';

function RecentSearches() {
  return (
    <div className={styles.recentSearches}>
      <h2>RECENT SEARCHES</h2>
      <div className={styles.searches}>
        <span>SIN</span>
        <span>LAX</span>
        <span>MY</span>
        <span>DUB</span>
      </div>
    </div>
  );
}

export default RecentSearches;
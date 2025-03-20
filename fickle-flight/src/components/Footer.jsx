// src/components/Footer.jsx
import styles from '/Users/mac2/University/Web2/ReactJS_ASS_3/fickle-flight/fickle-flight/src/styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} FickleFlight</p>
      {/* Add other footer content */}
    </footer>
  );
}

export default Footer;
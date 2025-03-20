// src/components/Newsletter.jsx
import styles from '/Users/mac2/University/Web2/ReactJS_ASS_3/fickle-flight/fickle-flight/src/styles/Newsletter.module.css';

function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
      <p>Get weekly updates</p>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
  );
}

export default Newsletter;
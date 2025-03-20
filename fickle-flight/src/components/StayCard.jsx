// src/components/StayCard.jsx
import styles from '/Users/mac2/University/Web2/ReactJS_ASS_3/fickle-flight/fickle-flight/src/styles/StayCard.module.css';

function StayCard({ stay }) {
  return (
    <div className={styles.card}>
      <img src={stay.image} alt={stay.name} />
      <h3>{stay.name}</h3>
      <p>{stay.location}</p>
      <button>More Details</button>
    </div>
  );
}

export default StayCard;
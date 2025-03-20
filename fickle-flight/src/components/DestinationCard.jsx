// src/components/DestinationCard.jsx
import styles from '/Users/mac2/University/Web2/ReactJS_ASS_3/fickle-flight/fickle-flight/src/styles/DestinationCard.module.css';

function DestinationCard({ destination }) {
  return (
    <div className={styles.card}>
      <img src={destination.image} alt={destination.name} />
      <h3>{destination.name}</h3>
      <p>${destination.price}</p>
    </div>
  );
}

export default DestinationCard;
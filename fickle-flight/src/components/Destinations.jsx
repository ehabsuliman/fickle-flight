// src/components/Destinations.jsx
import { destinations } from '../data';
import DestinationCard from './DestinationCard';
import styles from '/Users/mac2/University/Web2/ReactJS_ASS_3/fickle-flight/fickle-flight/src/styles/Destinations.module.css';

function Destinations() {
  return (
    <div className={styles.destinations}>
      <h2>Most Popular Destinations</h2>
      <div className={styles.cards}>
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
}

export default Destinations;
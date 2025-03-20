// src/components/Stays.jsx
import { stays } from '../data';
import StayCard from './StayCard';
import styles from '/Users/mac2/University/Web2/ReactJS_ASS_3/fickle-flight/fickle-flight/src/styles/Stays.module.css';

function Stays() {
  return (
    <div className={styles.stays}>
      <h2>Popular Stays</h2>
      <div className={styles.cards}>
        {stays.map((stay) => (
          <StayCard key={stay.id} stay={stay} />
        ))}
      </div>
    </div>
  );
}

export default Stays;
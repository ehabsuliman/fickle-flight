// src/components/HolidayCard.jsx
import styles from '/Users/mac2/University/Web2/ReactJS_ASS_3/fickle-flight/fickle-flight/src/styles/HolidayCard.module.css';

function HolidayCard({ holiday }) {
  return (
    <div className={styles.card}>
      <img src={holiday.image} alt={holiday.name} />
      <h3>{holiday.name}</h3>
      <p>${holiday.price}</p>
    </div>
  );
}

export default HolidayCard;
// src/components/Holidays.jsx
import { holidays } from '../data';
import HolidayCard from '/Users/mac2/University/Web2/ReactJS_ASS_3/fickle-flight/fickle-flight/src/components/HolidayCard.jsx';
import styles from '/Users/mac2/University/Web2/ReactJS_ASS_3/fickle-flight/fickle-flight/src/styles/HolidayCard.module.css';

function Holidays() {
  return (
    <div className={styles.holidays}>
      <h2>Recommended Holidays</h2>
      <div className={styles.cards}>
        {holidays.map((holiday) => (
          <HolidayCard key={holiday.id} holiday={holiday} />
        ))}
      </div>
    </div>
  );
}

export default Holidays;
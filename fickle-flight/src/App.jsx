// src/App.jsx
import Navbar from './components/Navbar'; // Import Navbar
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecentSearches from './components/RecentSearches';
import Destinations from './components/Destinations';
import Holidays from './components/Holidays';
import Stays from './components/Stays';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import styles from '/Users/mac2/University/Web2/ReactJS_ASS_3/fickle-flight/fickle-flight/src/styles/App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Header />
      <RecentSearches />
      <Destinations />
      <Holidays />
      <Stays />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
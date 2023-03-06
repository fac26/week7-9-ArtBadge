import styles from '@/styles/ExploreMain.module.css';
import NavBar from '../components/NavBar';
import StarRating from '@/components/StarRating';
import ArtCard from '@/components/ArtCard';

export default function ExploreMain() {
  return (
    <>
      <h1 className={styles.test}>Explore main page</h1>
      <ArtCard />
      <NavBar />
    </>
  );
}

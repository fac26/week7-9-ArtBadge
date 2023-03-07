import StarRating from './StarRating';
import style from '../styles/ArtCard.module.css';
import Layout from './Layout';

export default function ArtCard() {
  return (
    <Layout>
      <div className={style.cardContainer}>
        <h3>Art Card</h3>
        <StarRating value={3.4} />
      </div>
    </Layout>
  );
}

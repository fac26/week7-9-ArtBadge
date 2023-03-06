import StarRating from './StarRating';
import style from '../styles/ArtCard.module.css';

export default function ArtCard() {
  return (
    <div className={style.cardContainer}>
      <h3>Art Card</h3>
      <StarRating value={3.4} />
    </div>
  );
}

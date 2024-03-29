import ViewStarRating from './ViewStarRating';
import styles from '../styles/ArtCard.module.css';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function ArtCard({ post }) {
  const { title, image, location, rating } = post;
  if (image == null) return;

  return (
    <div className={styles.cardContainer}>
      <Image
        src={image}
        className={styles.image}
        width={300}
        height={300}
        alt={title}
      />
      <h3>{title}</h3>
      <ViewStarRating value={rating} />
      <div className={styles.locationDiv}>
        <Icon className={styles.vector} icon="material-symbols:location-on" />
        <p>{location}</p>
      </div>
    </div>
  );
}

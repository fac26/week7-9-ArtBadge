import styles from '../styles/ArtBadge.module.css';
import Image from 'next/image';

export default function ArtBadge({ badge }) {
  const { id, title, description, badge_url, badge_silhouette_url } = badge;
  console.log('badge', badge_silhouette_url);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageDiv}>
        <Image
          src={badge_url}
          className={styles.image}
          width={200}
          height={200}
          alt={title}
        />
      </div>
      <div className={styles.description}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

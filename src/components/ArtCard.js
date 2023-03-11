import StarRating from './StarRating';
import styles from '../styles/ArtCard.module.css';
import Layout from './Layout';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function ArtCard({ post }) {
  console.log(post);
  const { title, image, location, rating } = post;
  return (
    <Layout>
      <div className={styles.cardContainer}>
        <Image
          src={image}
          className={styles.image}
          width={300}
          height={300}
          alt={title}
        />
        <h3>{title}</h3>
        <StarRating value={rating} />
        <div className={styles.locationDiv}>
          <Icon className={styles.vector} icon="material-symbols:location-on" />
          <p>{location}</p>
        </div>
      </div>
    </Layout>
  );
}

import styles from '../styles/ArtBadge.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function ArtBadge({ badge }) {
  const { id, title, description, badge_url, badge_silhouette_url } = badge;
  const supabase = useSupabaseClient();
  const [badgeUrl, setBadgeUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (badge_url) downloadImage(badge_url);
  }, [badge_url]);

  async function downloadImage(badge_url) {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(badge_url);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setBadgeUrl(url);
    } catch (error) {
      console.log('Error downloading image: ', error);
    }
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageDiv}>
        <Image
          src={badgeUrl}
          className={styles.image}
          width={200}
          height={200}
          alt={title}
        />
      </div>
      <div className={styles.description}>
        <h3>{title}</h3>
        <p>
          {description}
          {badgeUrl}
        </p>
      </div>
    </div>
  );
}

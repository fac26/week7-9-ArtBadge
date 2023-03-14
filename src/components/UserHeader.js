import React, { useState, useEffect } from 'react';
import supabase from '../../api.js';
import Image from 'next/image';
import styles from '../styles/UserHeader.module.css';
import Link from 'next/link';

const UserHeader = ({ userProfile }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [avatarDownloaded, setAvatarDownloaded] = useState(false);

  const timestamp = userProfile.created_at;
  const date = new Date(timestamp);
  const options = { month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  useEffect(() => {
    if (userProfile.avatar_url && !avatarDownloaded) {
      downloadImage(userProfile.avatar_url);
    }
  }, [userProfile.avatar_url, avatarDownloaded]);

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
      setAvatarDownloaded(true);
    } catch (error) {
      console.log('Error downloading image: ', error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.info_container}>
        <div classname={styles.name_badge}>
          <h3>{userProfile.full_name}</h3>
          <p className={styles.badge}>{userProfile.badge_level}</p>
        </div>
        <div classname={styles.info}>
          <p>#{userProfile.username}</p>
        </div>
        <div classname={styles.info}>
          <p>Joined {formattedDate}</p>
        </div>
      </div>
      {avatarUrl && (
        <div className={styles.avatar}>
          <Image
            src={avatarUrl}
            className={styles.image}
            width={250}
            height={250}
            alt="avatar"
          />
        </div>
      )}
    </div>
  );
};

export default UserHeader;

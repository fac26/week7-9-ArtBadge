import React, { useState, useEffect } from 'react';
import supabase from '../../api.js';
import Image from 'next/image';
import styles from '../styles/Userbar.module.css';
import BackButton from './BackButton';
import Link from 'next/link';

const Userbar = ({ session }) => {
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    avatar_url: null,
    username: '',
  });
  const [avatarUrl, setAvatarUrl] = useState(null); // Add this state variable

  useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabase
        .from('profiles')
        .select()
        .eq('id', session.user.id)
        .single();

      if (error) {
        // eslint-disable-next-line no-console
        console.log('Error fetching user:', error);
      } else {
        setUser(data);
        if (data.avatar_url) {
          // Only download the avatar if it exists
          downloadImage(data.avatar_url);
        }
      }
    }

    fetchUser();
  }, [session]);

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
    } catch (error) {
      console.log('Error downloading image: ', error);
    }
  }

  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.back_button}>
          <BackButton />
        </div>
        <p>{user.username}</p>
        <p className={styles.badge}>{user.badge_level}</p>
        {avatarUrl && (
          <Link href={`/user-profile/${user.id}`}>
            <Image
              src={avatarUrl}
              className={styles.image}
              width={60}
              height={60}
              alt="avatar"
            />
          </Link>
        )}
      </div>
      <div className={styles.line}>
        <hr className={styles.hr} />
      </div>
    </>
  );
};

export default Userbar;

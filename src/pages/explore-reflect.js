import styles from '@/styles/ExploreReflect.module.css';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ExploreReflect() {
  const session = useSession();
  const supabase = useSupabaseClient();
  // const userId = session.user.id;

  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    avatar_url: null,
    username: '',
  });

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
        // if (data.avatar_url) {
        //   // Only download the avatar if it exists
        //   downloadImage(data.avatar_url);
        // }
      }
    }

    fetchUser();
  }, [session]);

  return (
    <Layout>
      {user.id !== null ? (
        <>
          <div className={styles.container}>
            <div className={styles.overlay}>
              <h1 className={styles.header}>ART BADGE</h1>
              <h2 className={styles.tag}>
                Upload and share your favourite artwork with your friends
              </h2>
              <div className={styles.displaycircles}>
                <Link href="/explore-main">
                  <button className={styles.explorebutton}>
                    EXPLORE<br></br>
                    <span className={styles.lowercase}>
                      new art that others have experienced
                    </span>
                  </button>
                </Link>
                <br></br>
                <Link href={`/user-profile/${user.id}`}>
                  <button className={styles.reflectbutton}>
                    REFLECT<br></br>
                    <span className={styles.lowercase}>
                      on art that you have seen
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
}

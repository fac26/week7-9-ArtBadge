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
    if (session) {
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
    }
  }, [supabase, session]);
  return (
    <Layout>
      {user.id !== null ? (
        <>
          <h1 className={styles.header}>ArtBadge</h1>
          <h2 className={styles.tag}>
            Upload and share your favourite artwork with your friends
          </h2>
          <Link href="/explore-main">
            <button>
              EXPLORE<br></br>
              new art that others have experienced
            </button>
          </Link>
          <br></br>
          <Link href={`/user-profile/${user.id}`}>
            <button>
              REFLECT<br></br>
              on art that you have seen
            </button>
          </Link>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
}

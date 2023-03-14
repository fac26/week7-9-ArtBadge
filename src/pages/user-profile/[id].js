import styles from '@/styles/UserProfile.module.css';
import ArtCard from '@/components/ArtCard';
import Layout from '@/components/Layout';
import supabase from '../../../api.js';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import UserHeader from '@/components/UserHeader.js';
import { useSession } from '@supabase/auth-helpers-react';

export async function getStaticProps({ params }) {
  const { userProfile, error_user } = await supabase
    .from('profiles')
    .select()
    .eq('id', params.id)
    .single();

  return { props: { userProfile: userProfile } };
}

export async function getStaticPaths() {
  const { data, error } = await supabase.from('profiles').select();
  const profiles = data ? data : null;
  const paths = profiles.map((profile) => ({
    params: { id: `${profile.id}` },
  }));
  return { paths, fallback: true };
}

export default function UserProfile({ userProfile }) {
  const [posts, setPosts] = useState([]);
  const session = useSession();
  const isUserProfile = session?.user.id === userProfile.id;

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('artData')
        .select()
        .eq('user_uuid', userProfile.id);

      if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return;
      }

      setPosts(data);
    }

    fetchPosts();
  }, [userProfile]);

  return (
    <Layout>
      <UserHeader userProfile={userProfile} isUserProfile={isUserProfile} />
      <div className={styles.line}>
        <hr className={styles.hr} />
        <div className={styles.heading}>My Posts</div>
        <hr className={styles.hr} />
      </div>
      <div className={styles.artGrid}>
        {posts && posts.map((post) => <ArtCard key={post.id} post={post} />)}
      </div>
    </Layout>
  );
}

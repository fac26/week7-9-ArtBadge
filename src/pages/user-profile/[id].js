import styles from '@/styles/UserProfile.module.css';
import ArtCard from '@/components/ArtCard';
import Layout from '@/components/Layout';
import supabase from '../../../api.js';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import UserHeader from '@/components/UserHeader.js';
import { useSession } from '@supabase/auth-helpers-react';

export async function getServerSideProps(context) {
  const { params } = context;
  const { data, error_user } = await supabase
    .from('profiles')
    .select()
    .eq('id', params.id)
    .single();

  const userProfile = data ? data : null;
  const { data: postsData, error: postsError } = await supabase
    .from('artData')
    .select()
    .eq('user_uuid', params.id);

  if (postsError) {
    // eslint-disable-next-line no-console
    console.log(postsError);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      userProfile,
      posts: postsData ? postsData : [],
    },
  };
}

export default function UserProfile({ userProfile, posts }) {
  const session = useSession();
  const isUserProfile = session?.user.id === userProfile.id;

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
import styles from '@/styles/ReflectPersonalBadges.module.css';
import ArtBadge from '@/components/ArtBadge';
import Layout from '@/components/Layout';
import supabase from '../../../api.js';
import { useEffect, useState } from 'react';
import UserHeader from '@/components/UserHeader.js';
import { useSession } from '@supabase/auth-helpers-react';

export async function getStaticProps({ params }) {
  const { data, error_user } = await supabase
    .from('profiles')
    .select()
    .eq('id', params.id)
    .single();

  const userProfile = data ? data : null;

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

export default function UserBadges({ userProfile }) {
  const [badges, setBadges] = useState([]);
  const session = useSession();

  useEffect(() => {
    async function fetchBadges() {
      const { data, error } = await supabase.from('artBadges').select();

      if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return;
      }

      setBadges(data);
    }

    fetchBadges();
  }, [userProfile]);

  return (
    <Layout>
      {userProfile ? (
        <UserHeader userProfile={userProfile} session={session} />
      ) : (
        <div>Loading...</div>
      )}
      <div className={styles.line}>
        <hr className={styles.hr} />
        <div className={styles.heading}>My Badges</div>
        <hr className={styles.hr} />
      </div>
      <div className={styles.badgesGrid}>
        {badges &&
          badges.map((badge) => <ArtBadge key={badge.id} badge={badge} />)}
      </div>
    </Layout>
  );
}

import styles from '@/styles/UserProfile.module.css';
import ArtCard from '@/components/ArtCard';
import Layout from '@/components/Layout';
import supabase from '../../../api.js';
import { useRouter } from 'next/router';

export async function getStaticProps() {
  // console.log(supabase.auth.user());
  const { data, error } = await supabase.from('profiles').select();
  return { props: { profile } };
}

export async function getStaticPaths() {
  const { data, error } = await supabase.from('profiles').select();
  const profiles = data ? data : null;
  const paths = profiles.map((profile) => ({
    params: { id: `${profile.username}` },
  }));
  return { paths, fallback: true };
}

export default function UserProfile({ profile }) {
  const router = useRouter();
  // console.log(JSON.stringify(props));
  console.log(props.post);
  return (
    <Layout>
      <h1 className={styles.test}>Hello {profile.username}</h1>
      <ArtCard />
    </Layout>
  );
}

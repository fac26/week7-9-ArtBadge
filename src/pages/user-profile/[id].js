import styles from '@/styles/UserProfile.module.css';
import ArtCard from '@/components/ArtCard';
import Layout from '@/components/Layout';
import supabase from '../../../api.js';
import { useRouter } from 'next/router';

export async function getStaticProps({ params }) {
  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('username', params.id);
  return { props: { data } };
}

export async function getStaticPaths() {
  const { data, error } = await supabase.from('profiles').select();
  const profiles = data ? data : null;
  const paths = profiles.map((profile) => ({
    params: { id: `${profile.username}` },
  }));
  return { paths, fallback: true };
}

export default function UserProfile({ data }) {
  const router = useRouter();
  // console.log(JSON.stringify(props));
  console.log({ data });
  return (
    <Layout>
      <h1 className={styles.test}>{data[0].username}</h1>
      <ArtCard />
    </Layout>
  );
}

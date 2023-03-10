import styles from '@/styles/UserProfile.module.css';
import ArtCard from '@/components/ArtCard';
import Layout from '@/components/Layout';
import supabase from '../../../api.js';
import { useRouter } from 'next/router';

export async function getStaticProps({ params }) {
  const { data, error_user } = await supabase
    .from('profiles')
    .select()
    .eq('username', params.id);
  const { posts, error_posts } = await supabase
    .from('artData')
    .select()
    .eq('user_uuid', data.id);
  console.log(posts);
  console.log(data.id);
  return { props: { data: data[0] } };
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
  // console.log({ data });
  // console.log({ posts });
  return (
    <Layout>
      <h1 className={styles.test}>{data.username}</h1>
      <ArtCard />
    </Layout>
  );
}

import styles from '@/styles/ExploreMain.module.css';
import NavBar from '../components/NavBar';
import ArtCard from '@/components/ArtCard';
import Layout from '../components/Layout';
import supabase from '../../api.js';
import { useRouter } from 'next/router';

export async function getServerSideProps() {
  // console.log(supabase.auth.user());
  const { data, error } = await supabase.from('profiles').select();
  return { props: { post: data } };
}

export default function ExploreMain(props) {
  const router = useRouter();
  // console.log(JSON.stringify(props));
  console.log(props.post);
  return (
    <Layout>
      <h1 className={styles.test}>Explore main page</h1>
      <ArtCard />
    </Layout>
  );
}

import styles from '@/styles/ExploreMain.module.css';
import NavBar from '../components/NavBar';
import ArtCard from '@/components/ArtCard';
import Layout from '../components/Layout';
import supabase from '../../api.js';

export default function ExploreMain() {
  return (
    <Layout>
      <h1 className={styles.test}>Explore main page</h1>
    </Layout>
  );
}

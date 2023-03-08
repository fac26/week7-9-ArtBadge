import styles from '@/styles/ExploreReflect.module.css';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function ExploreReflect() {
  return (
    <Layout>
      <h1 className={styles.test}>Explore & Reflect landing page</h1>
      <Link href="/explore-main">Explore</Link>
      <br></br>
      <Link href="/reflect-personal-profile">Reflect</Link>
    </Layout>
  );
}

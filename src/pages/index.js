import NavBar from '@/components/NavBar';

import Head from 'next/head';
// will we use a Next font //
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout home>
      <h1 className={styles.test}>Homepage!</h1>
      <NavBar />
    </Layout>
  );
}

import Head from 'next/head';
// will we use a Next font //
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <h1 className={styles.test}>Homepage!</h1>
      <Link href="/sign-in">Sign In/ Sign Up</Link>
    </Layout>
  );
}

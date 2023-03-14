import Head from 'next/head';
// will we use a Next font //
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <Layout home>
      <Logo className={styles.logo} />
      <Link href="/sign-in">Click here to enter ArtBadge</Link>
    </Layout>
  );
}

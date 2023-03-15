import Head from 'next/head';
// will we use a Next font //
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <img
            className={styles.logo}
            src="/ArtBadge-Logo.png"
            alt="Art Badge Logo"
          />
          <h1 className={styles.title}>Art Badge</h1>
          <p className={styles.overview}>
            An app for you to explore new art experiences and share your own
            ones with the word
          </p>
          <Link className={styles.link} href="/sign-in">
            Sign In/ Sign Up
          </Link>
        </div>
      </div>
    </Layout>
  );
}

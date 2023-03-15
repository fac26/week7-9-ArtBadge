import styles from '@/styles/ExploreReflect.module.css';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function ExploreReflect() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <h1 className={styles.header}>ART BADGE</h1>
          <h2 className={styles.tag}>
            Upload and share your favourite artwork with your friends
          </h2>
          <Link href="/explore-main">
            <button className={styles.explorebutton}>
              EXPLORE<br></br>
              new art that others have experienced
            </button>
          </Link>
          <br></br>
          <Link href="/reflect-personal-profile">
            <button className={styles.reflectbutton}>
              REFLECT<br></br>
              on art that you have seen
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

import styles from '@/styles/ExploreReflect.module.css';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function ExploreReflect() {
  return (
    <Layout>
      <h1 className={styles.header}>ArtBadge</h1>
      <h2 className={styles.tag}>
        Upload and share your favourite artwork with your friends
      </h2>
      <Link href="/explore-main">
        <button>
          EXPLORE<br></br>
          new art that others have experienced
        </button>
      </Link>
      <br></br>
      <Link href="/reflect-personal-profile">
        <button>
          REFLECT<br></br>
          on art that you have seen
        </button>
      </Link>
    </Layout>
  );
}

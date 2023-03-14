import GetData from '@/components/GetDetails';
import styles from '@/styles/ReflectAddPreview.module.css';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function ReflectAddPreview() {
  return (
    <Layout>
      <h1 className={styles.test}>Reflect add preview</h1>
      <GetData />
      <p>Would you like to post?</p>
      <Link href="/reflect-personal-profile">
        <button>No, discard it</button>
      </Link>
      <Link href="/reflect-personal-profile">
        <button>Yes, post it</button>
      </Link>
    </Layout>
  );
}

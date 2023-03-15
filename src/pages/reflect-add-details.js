import styles from '@/styles/ReflectAddDetails.module.css';
import Layout from '../components/Layout';
import AddDetails from '@/components/AddDetails';
import Link from 'next/link';

export default function ReflectAddDetails() {
  return (
    <Layout>
      <h1 className={styles.test}>Reflect add details page</h1>
      <AddDetails />
      <Link href="/reflect-add-preview">
        <button>Next</button>
      </Link>
    </Layout>
  );
}

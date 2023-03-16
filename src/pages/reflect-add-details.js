import styles from '@/styles/ReflectAddDetails.module.css';
import Layout from '../components/Layout';
import AddDetails from '@/components/AddDetails';
import Link from 'next/link';

export default function ReflectAddDetails() {
  return (
    <Layout>
      <AddDetails />
      <Link href="/reflect-add-preview">
        <button className={styles.cancel}>Cancel</button>
        <button className={styles.next}>Next</button>
      </Link>
    </Layout>
  );
}

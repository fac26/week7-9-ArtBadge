import styles from '@/styles/ReflectAddDetails.module.css';
import Layout from '../components/Layout';
import AddDetails from '@/components/AddDetails';

export default function ReflectAddDetails() {
  return (
    <Layout>
      <h1 className={styles.test}>Reflect add details page</h1>
      <AddDetails />
      <a href="/reflect-add-preview">
        <button>Next</button>
      </a>
    </Layout>
  );
}

import GetData from '@/components/GetDetails';
import styles from '@/styles/ReflectAddPreview.module.css';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useState } from 'react';
import DetailsToDB from '@/utils/DetailsToDB';
import { LOCAL_STORAGE_KEY } from '@/components/AddDetails';

export default function ReflectAddPreview() {
  const [isPosting, setisPosting] = useState(null);
  
  const handlePost = async () => {
    setisPosting(true);
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    await DetailsToDB(data);
    setisPosting(false);
  };
  return (
    <Layout>
      <h1 className={styles.test}>Reflect add preview</h1>
      <GetData />
      <p>Would you like to post?</p>
      <Link href="/explore-reflect">
        <button>No, discard it</button>
      </Link>
      <Link href="/explore-reflect">
        <button onClick={handlePost}>Yes, post it</button>
      </Link>
    </Layout>
  );
}

import styles from '@/styles/ReflectAddImage.module.css';
import Layout from '../components/Layout';
import ImageUploader from '@/components/ImageUploader';
import { useState } from 'react';

export default function ReflectAddImage() {
const [selectedFile, setSelectedFile] = useState(null);
  return (
  <Layout>
    <h1 className={styles.test}>Reflect add image page</h1>
    <ImageUploader selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>
  </Layout>
  );
}

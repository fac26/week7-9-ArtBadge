import styles from '@/components/Layout.module.css';

export default function Layout({ children }) {
  return <div className={styles.test}>{children}</div>;
}

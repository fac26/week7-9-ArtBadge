import styles from '@/components/Layout.module.css';
import NavBar from '@/components/NavBar';

export default function Layout({ children, home }) {
  return (
    <div className={styles.test}>
      <main>{children}</main>
      {!home ? <NavBar /> : null}
    </div>
  );
}

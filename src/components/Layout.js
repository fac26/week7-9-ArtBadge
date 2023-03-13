import styles from '../styles/Layout.module.css';
import NavBar from '@/components/NavBar';
import Userbar from './Userbar';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Layout({ children, home }) {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      <header className={styles.userbar}>
        {session ? <Userbar session={session} /> : null}
      </header>
      <div className={styles.test}>
        <main>{children}</main>
        {!home ? <NavBar /> : null}
      </div>
    </>
  );
}

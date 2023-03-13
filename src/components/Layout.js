import styles from '../styles/Layout.module.css';
import NavBar from '@/components/NavBar';
import Userbar from './Userbar';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Layout({ children, home }) {
  const session = useSession();
  const supabase = useSupabaseClient();
  console.log('session', session);
  console.log('supabase', supabase);
  // const session = true;
  return (
    <>
      <header className="userbar">{session ? <Userbar /> : null}</header>

      <div className={styles.test}>
        <main>{children}</main>
        {!home ? <NavBar /> : null}
      </div>
    </>
  );
}

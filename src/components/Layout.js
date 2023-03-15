import NavBar from '@/components/NavBar';
import Userbar from './Userbar';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Layout({ children, home }) {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
<<<<<<< HEAD
    <>
      <header className={styles.userbar}>
        {session ? <Userbar session={session} /> : null}
      </header>
      <div className={styles.test}>
        <main>{children}</main>
        {!home ? <NavBar /> : null}
      </div>
    </>
=======
    <div>
      <main>{children}</main>
      {!home ? <NavBar /> : null}
    </div>
>>>>>>> 2b5cda422f70f22bf0a63ebfb00cb804e01d2835
  );
}

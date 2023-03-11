import styles from '@/styles/SignIn.module.css';
import { Auth } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '../components/Account';
import Link from 'next/link';

export default function SignIn() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      <h1 className={styles.test}>Sign Up / Sign In</h1>
      <div className="container">
        {!session ? (
          <Auth supabaseClient={supabase} />
        ) : (
          <Account session={session} />
        )}
      </div>
    </>
  );
}

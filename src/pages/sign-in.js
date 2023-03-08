import styles from '@/styles/SignIn.module.css';
import { Auth } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '../components/Account';
// import Router from 'next/router'

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
        //   Router.push({
        //     pathname:'/explore-main',
        //     query: { example: 'something' },                // query is optional
        // }).then(() => {
        //     window.scrollTo(0, 0)
        // })
          <Account session={session} />
        )}
      </div>
    </>
  );
}

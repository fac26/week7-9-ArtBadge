import styles from '@/styles/SignIn.module.css';
import { Auth } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '../components/Account';
import Logo from '@/components/Logo';

export default function SignIn() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      <div className="container">
        {!session ? (
          <>
            <Logo />
            <p className={styles.signInCopy}>
              Sign up for a new ArtBadge account or sign in to an existing
              account.
            </p>
            <Auth supabaseClient={supabase} providers />
          </>
        ) : (
          <>
            <Logo />
            <Account session={session} />
          </>
        )}
      </div>
    </>
  );
}

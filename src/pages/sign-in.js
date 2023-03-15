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
      <div className={styles.overlay}>
        <div className={styles.container}>
          <Logo />
          {!session ? (
            <Auth
              supabaseClient={supabase}
              appearance={{
                style: {
                  button: {
                    padding: 5,
                    borderColor: '#D9D9D9',
                    backgroundColor: '#D9D9D9',
                    borderRadius: 25,
                  },
                  input: {
                    padding: 5,
                    borderColor: '#D9D9D9',
                    backgroundColor: '#D9D9D9',
                    borderRadius: 25,
                    color: '#8D939E',
                    textAlign: 'centre',
                  },
                  label: {
                    display: 'none',
                  },
                },
              }}
              providers
            />
          ) : (
            <>
              <Logo />
              <Account session={session} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

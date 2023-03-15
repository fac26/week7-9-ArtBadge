import styles from '@/styles/SignIn.module.css';
import { Auth } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '../components/Account';
import Logo from '@/components/Logo';

export default function SignIn() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
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
                  width: 300,
                  marginLeft: 30,
                },
                input: {
                  padding: 5,
                  borderColor: '#D9D9D9',
                  backgroundColor: '#D9D9D9',
                  borderRadius: 25,
                  color: '#8D939E',
                  textAlign: 'centre',
                  width: 300,
                  marginLeft: 30,
                },
                label: {
                  display: 'none',
                },
                anchor: {
                  color: 'white',
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
  );
}

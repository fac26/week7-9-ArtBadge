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
      <img
        className={styles.logo}
        src="/ArtBadge-Logo.png"
        alt="Art Badge Logo"
      />
      <div className={styles.container}>
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
          <Account session={session} />
        )}
      </div>
    </>
  );
}

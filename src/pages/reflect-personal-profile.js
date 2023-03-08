import styles from '@/styles/ReflectPersonalProfile.module.css';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '../components/Account';

export default function ReflectPersonalProfile() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      <h1 className={styles.test}>Reflect personal profile</h1>
      <div>{JSON.stringify(session)}</div>
      <div>{session.user.email}</div>
    </>
  );
}

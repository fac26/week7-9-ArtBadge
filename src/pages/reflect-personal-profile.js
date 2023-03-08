import styles from '@/styles/ReflectPersonalProfile.module.css';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '../components/Account';
import Layout from '../components/Layout'

export default function ReflectPersonalProfile() {
  // const session = useSession();
  // const supabase = useSupabaseClient();

  return (
  <Layout>
    <h1 className={styles.test}>Reflect personal profile</h1>
  </Layout>
  )
}

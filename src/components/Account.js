import { useState, useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import Avatar from './Avatar';
import styles from '../styles/Account.module.css';

export default function Account({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, avatar_url`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert('Error loading user data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, avatar_url }) {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        username,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from('profiles').upsert(updates);
      if (error) throw error;
      alert('Profile updated!');
      window.location.href = '/explore-reflect';
    } catch (error) {
      alert('Error updating the data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className="form-widget">
        <Avatar
          uid={user.id}
          url={avatar_url}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url);
            updateProfile({ username, avatar_url: url });
          }}
        />
        <div className={styles.inputBoxes}>
          <div>
            <input
              className={styles.email}
              id="email"
              type="text"
              value={session.user.email}
              disabled
              required
            />
          </div>
          <div>
            <input
              className={styles.username}
              id="username"
              type="text"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <button
              className={styles.button}
              onClick={() => updateProfile({ username, avatar_url })}
              disabled={loading}
            >
              {loading ? 'Loading ...' : 'Go to landing page'}
            </button>
          </div>

          <div>
            <button
              className={styles.button}
              onClick={() => supabase.auth.signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

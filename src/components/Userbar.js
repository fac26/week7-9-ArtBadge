import React, { useState, useEffect } from 'react';
import supabase from '../../api.js';

const Userbar = ({ session }) => {
  const [user, setUser] = useState({ id: null, name: '', email: '' });

  useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabase
        .from('profiles')
        .select()
        .eq('id', session.user.id);

      if (error) {
        return;
      }

      setUser(data);
    }

    fetchUser();
  }, [session]);

  console.log('avatar', user.avatar_url);

  return (
    <>
      {/* <h1>{JSON.stringify(session)}</h1> */}
      <h1>{JSON.stringify(session.user.id)}</h1>
      <h1>user id:{JSON.stringify(user)}</h1>
      <img src={user.avatar_url} alt="avatar" />
    </>
  );
};

export default Userbar;

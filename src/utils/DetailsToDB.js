import supabase from '../../api';
import { LOCAL_STORAGE_KEY } from '@/components/AddDetails';

export default async function DetailsToDB(data) {
  const { error } = await supabase.from('artData').insert([data]);
  if (error) {
    console.log(error.message);
  } else {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }
}

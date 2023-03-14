import { useState, useEffect } from 'react';
import ViewStarRating from './ViewStarRating';

export default function GetData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      {data && (
        <>
          <p>Title: {data.title}</p>
          <p>Artist: {data.artist}</p>
          <ViewStarRating value={data.rating} />
          <p>Location: {data.location}</p>
          <p>Time: {data.time}</p>
          <p>Description: {data.description}</p>
        </>
      )}
    </div>
  );
}

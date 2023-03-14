import { useState, useEffect } from 'react';

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
          <p>Rating: {data.rating}</p>
          <p>Location: {data.location}</p>
          <p>Time: {data.time}</p>
          <p>Description: {data.description}</p>
        </>
      )}
    </div>
  );
}

import { useState, useEffect } from 'react';

const AddDetails = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [rating, setRating] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !artist || !rating || !location || !time) {
      setFormError('Please fill in all the fields correctly');
      return;
    }
  };

  const dataToStore = {
    title,
    artist,
    rating,
    location,
    time,
    description,
  };

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify({ dataToStore }));
  }, [{ dataToStore }]);

  return (
    <div className="addDetails">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          className="addTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title*"
          required
        />
        <input
          type="text"
          id="artist"
          className="addArtist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Who is it by?*"
          required
        />
        <label htmlFor="rating">
          What would you rate it out of 5?*(Half points are acceptable)
        </label>
        <input
          type="number"
          id="rating"
          className="addRating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <input
          type="text"
          id="location"
          className="addLocation"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Which gallery and city did you see it?*"
          required
        />
        <input
          type="text"
          id="time"
          className="addTime"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="What time did you see it(am/pm)?*"
          required
        />
        <textarea
          name="description"
          id="description"
          className="addDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description of how your experience was"
          cols="30"
          rows="10"
        ></textarea>
      </form>
    </div>
  );
};

export default AddDetails;

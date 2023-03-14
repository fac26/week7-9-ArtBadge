import React, { useState, useEffect } from 'react';
import SetStarRating from './StarRating';

const AddDetails = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);

  const handleRatingChange = (rating) => {
    setRating(rating);
  };

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
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToStore));
  }, [dataToStore]);

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
        <label htmlFor="rating">What would you rate it out of 5?*</label>
        <SetStarRating
          onChange={handleRatingChange}
          rating={rating}
          setRating={setRating}
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

export const LOCAL_STORAGE_KEY = 'data';
export default AddDetails;

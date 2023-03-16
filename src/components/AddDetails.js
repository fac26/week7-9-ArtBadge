import React, { useState, useEffect } from 'react';
import SetStarRating from './StarRating';
import Image from 'next/image';
import { useSession } from '@supabase/auth-helpers-react';
import styles from '../styles/AddDetails.module.css';
import { Icon } from '@iconify/react';

const AddDetails = () => {
  const session = useSession();
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState('');
  const [user_uuid, setUserUuid] = useState('');

  useEffect(() => {
    if (session) {
      setUserUuid(session.user.id);
    }
  }, [session]);

  useEffect(() => {
    const image = localStorage.getItem('uploadedFile');
    setImage(image);
  }, [image]);

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
    image,
    user_uuid,
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToStore));
  }, [dataToStore]);

  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className={styles.overlay}>
          <div className="addDetails">
            <h1 className={styles.heading}>
              Fill out this form to create a post.
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="title"
                className={styles.title}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title*"
                required
              />
              <input
                type="text"
                id="artist"
                className={styles.artist}
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                placeholder="Who is it by?*"
                required
              />
              <label className={styles.ratingLabel} htmlFor="rating">
                What would you rate it out of 5?*
              </label>
              <SetStarRating
                onChange={handleRatingChange}
                rating={rating}
                setRating={setRating}
              />
              <div className={styles.locationForm}>
                <Icon
                  className={styles.vector}
                  icon="material-symbols:location-on-rounded"
                />
                <input
                  type="text"
                  id="location"
                  className={styles.location}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Gallery, city?*"
                  required
                />
              </div>
              <div className={styles.timeForm}>
                <Icon
                  className={styles.vector}
                  icon="material-symbols:nest-clock-farsight-analog-outline-rounded"
                />
                <input
                  type="time"
                  id="time"
                  className={styles.time}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="What time did you see it(am/pm)?*"
                  required
                />
              </div>
              <textarea
                name="description"
                id="description"
                className={styles.description}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description of how your experience was"
                cols="30"
                rows="10"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export const LOCAL_STORAGE_KEY = 'data';
export default AddDetails;

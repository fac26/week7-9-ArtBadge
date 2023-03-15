import { useState } from 'react';
import { Icon } from '@iconify/react';

const Star = ({ filled, onClick }) => (
  <div onClick={onClick}>
    {filled ? (
      <Icon color="#FFD700" icon="ic:round-star" />
    ) : (
      <Icon color="#8d939e" icon="ic:round-star-outline" />
    )}
  </div>
);

const HalfStar = ({ onClick }) => (
  <div onClick={onClick}>
    <Icon color="#FFD700" icon="tabler:star-half-filled" />
  </div>
);

export default function ViewStarRating({ value }) {
  const filledStars = Math.floor(value);
  const halfFilledStar = value - filledStars >= 0.5 && value - filledStars < 1;
  const emptyStars = 5 - filledStars - (halfFilledStar ? 1 : 0);
  console.log(halfFilledStar);
  return (
    <div>
      {[...Array(filledStars)].map((n, i) => (
        <Star key={i} filled />
      ))}
      {halfFilledStar && <HalfStar />}
      {[...Array(emptyStars)].map((n, i) => (
        <Star key={i} filled={false} />
      ))}
    </div>
  );
}

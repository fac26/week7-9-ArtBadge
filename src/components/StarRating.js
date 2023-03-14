import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const Star = ({ filled, halfFilled, onClick }) => (
  <div onClick={onClick}>
    {halfFilled ? (
      <Icon
        color="#FFD700"
        icon="tabler:star-half-filled"
        width={28}
        height={28}
      />
    ) : filled ? (
      <Icon color="#FFD700" icon="ic:round-star" width={28} height={28} />
    ) : (
      <Icon
        color="#8d939e"
        icon="ic:round-star-outline"
        width={28}
        height={28}
      />
    )}
  </div>
);

export default function SetStarRating({ rating, setRating }) {
  const [hoveredStar, setHoveredStar] = useState(null);

  const handleStarClick = (starIndex, isHalf) => {
    const newValue = isHalf ? starIndex + 0.5 : starIndex + 1;
    setRating(newValue === rating ? 0 : newValue);
  };

  const handleStarHover = (starIndex, isHalf) => {
    setHoveredStar(isHalf ? starIndex + 0.5 : starIndex);
  };

  const handleMouseLeave = () => {
    setHoveredStar(null);
  };

  const filledStars = Math.floor(rating);
  const hasHalfStar =
    rating - filledStars >= 0.25 && rating - filledStars <= 0.75;

  return (
    <div onMouseLeave={handleMouseLeave}>
      {[...Array(5)].map((_, i) => {
        const filled = i < filledStars;
        const halfFilled = i === filledStars && hasHalfStar;

        return (
          <Star
            key={i}
            filled={filled}
            onClick={() => handleStarClick(i, halfFilled)}
            onMouseEnter={() => handleStarHover(i, halfFilled)}
          />
        );
      })}
    </div>
  );
}

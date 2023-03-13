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

export default function SetStarRating() {
  const [value, setValue] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(null);

  const handleStarClick = (starIndex) => {
    if (value === starIndex + 1) {
      // If the clicked star is already selected, deselect it
      setValue(0);
    } else {
      // Otherwise, set the value to the index of the clicked star
      setValue(starIndex + 1);
    }
  };
  const handleStarHover = (starIndex) => {
    setHoveredStar(starIndex);
  };

  const handleMouseLeave = () => {
    setHoveredStar(null);
  };

  const filledStars = Math.floor(value);
  const hasHalfStar = value - filledStars >= 0.5;

  return (
    <div onMouseLeave={handleMouseLeave}>
      {[...Array(5)].map((_, i) => {
        const filled = i < filledStars || (i === filledStars && hasHalfStar);
        const isHovered = i <= hoveredStar;

        return (
          <Star
            key={i}
            filled={filled}
            onClick={() => handleStarClick(i)}
            onMouseEnter={() => handleStarHover(i)}
          />
        );
      })}
    </div>
  );
}
